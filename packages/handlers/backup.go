package handlers

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
	"time"

	"cloud.google.com/go/bigquery"
	"cloud.google.com/go/storage"
	"golang.org/x/net/context"
	"google.golang.org/api/iterator"
	"google.golang.org/appengine"
	"google.golang.org/appengine/file"
	"google.golang.org/appengine/log"
	"google.golang.org/appengine/runtime"
	"google.golang.org/appengine/urlfetch"
)

func CreateBackup(w http.ResponseWriter, r *http.Request) {

	ctx := appengine.NewContext(r)
	bucketStr, err := file.DefaultBucketName(ctx)
	if err != nil {
		log.Errorf(ctx, "Cannot get default bucket name %v", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	appID := appengine.AppID(ctx)
	url := fmt.Sprintf("https://datastore.googleapis.com/v1/projects/%s:export", appID)

	access_token, _, err := appengine.AccessToken(ctx, "https://www.googleapis.com/auth/datastore")
	if err != nil {
		log.Errorf(ctx, "Unable to get access token %v", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	entity_filter := map[string]interface{}{
		"kinds": []string{"family", "child", "carer", "notes", "referral", "visit", "location", "project"},
	}
	request := map[string]interface{}{
		"project_id":        appID,
		"output_url_prefix": "gs://" + bucketStr,
		"entity_filter":     entity_filter,
	}
	bb, err := json.Marshal(request)
	if err != nil {
		log.Errorf(ctx, "Unable marshal request %v", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	req, err := http.NewRequest("POST", url, bytes.NewReader(bb))
	if err != nil {
		log.Errorf(ctx, "Error posting request %v", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+access_token)

	client := urlfetch.Client(ctx)

	rsp, err := client.Do(req)
	if err != nil {
		log.Errorf(ctx, "Error calling export %v", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	defer rsp.Body.Close()
	bb, err = ioutil.ReadAll(rsp.Body)
	if rsp.StatusCode > 299 {
		log.Infof(ctx, "Failed backup: %v", string(bb))
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	log.Infof(ctx, "Backed up all: %v", string(bb))
}

func Backup(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	bucketStr, err := file.DefaultBucketName(ctx)
	if err != nil {
		log.Errorf(ctx, "Cannot get default bucket name %v", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	names, attrs, err := getBuckets(ctx, bucketStr)
	if err != nil {
		log.Errorf(ctx, "Failed to list buckets: %v", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	err = runtime.RunInBackground(ctx, func(ctx context.Context) {
		err = loadBQ(ctx, names)
		if err != nil {
			log.Errorf(ctx, "Failed to load BQ: %v", err)
			return
		}

		err = deleteBuckets(ctx, attrs, bucketStr)
		if err != nil {
			log.Errorf(ctx, "Failed to delete buckets: %v", err)
			return
		}

		log.Infof(ctx, "Done backup: %v", names)
	})
	if err != nil {
		log.Errorf(ctx, "Failed to run in background: %v", err)
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

}

func getBuckets(ctx context.Context, bucketStr string) ([]string, []*storage.ObjectAttrs, error) {

	gcsClient, err := storage.NewClient(ctx)
	if err != nil {
		return nil, nil, err
	}
	now := time.Now().Format("2006-01-02")
	log.Infof(ctx, "Now: %s", now)
	backups := []string{}
	backupsAttrs := []*storage.ObjectAttrs{}
	bh := gcsClient.Bucket(bucketStr)
	itr := bh.Objects(ctx, nil)
	for {
		objAttrs, err := itr.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			return nil, nil, err
		}

		log.Infof(ctx, "Got Object: %v", objAttrs.Name)
		if strings.HasPrefix(objAttrs.Name, now) && strings.HasSuffix(objAttrs.Name, ".export_metadata") {
			backups = append(backups, "gs://"+bucketStr+"/"+objAttrs.Name)
		}

		// keep a week
		timeToKeep := time.Now()
		willKeep := false
	KeepLabel:
		for ii := 0; ii < 7; ii++ {
			keep := timeToKeep.Format("2006-01-02")
			if strings.HasPrefix(objAttrs.Name, keep) {
				willKeep = true
				break KeepLabel
			}
			timeToKeep = timeToKeep.Add(-24 * time.Hour)
		}
		if !willKeep {
			backupsAttrs = append(backupsAttrs, objAttrs)
		}

	}
	return backups, backupsAttrs, nil
}

func deleteBuckets(ctx context.Context, buckets []*storage.ObjectAttrs, bucketStr string) error {

	gcsClient, err := storage.NewClient(ctx)
	if err != nil {
		return err
	}

	bh := gcsClient.Bucket(bucketStr)
	for _, obj := range buckets {
		oh := bh.Object(obj.Name)
		log.Infof(ctx, "Deleting bucket %v", obj.Name)
		err := oh.Delete(ctx)
		if err != nil {
			return err
		}
	}
	return nil
}

func loadBQ(ctx context.Context, backups []string) error {

	// Get the current application ID, which is the same as the project ID.
	projectID := appengine.AppID(ctx)

	// Create the BigQuery service.
	bq, err := bigquery.NewClient(ctx, projectID)
	if err != nil {
		return fmt.Errorf("could not create service: %v", err)
	}

	myDataset := bq.Dataset("playbusdata")
	jobs := make([]*bigquery.Job, 0, len(backups))
	for _, url := range backups {
		log.Infof(ctx, "Loading backup: %s", url)
		urlArr := strings.Split(url, "/")
		if len(urlArr) == 0 {
			continue
		}
		filename := urlArr[len(urlArr)-1]
		kind := strings.TrimSuffix(strings.TrimPrefix(filename, "all_namespaces_kind_"), ".export_metadata")

		gcsRef := bigquery.NewGCSReference(url)
		gcsRef.SourceFormat = "DATASTORE_BACKUP"
		loader := myDataset.Table(kind).LoaderFrom(gcsRef)
		loader.WriteDisposition = bigquery.WriteTruncate
		job, err := loader.Run(ctx)
		if err != nil {
			return fmt.Errorf("could not create service: %v", err)
		}

		jobs = append(jobs, job)
	}

	for _, job := range jobs {
		status, err := job.Wait(ctx)
		if err != nil {
			return fmt.Errorf("could not create service: %v", err)
		}

		err = status.Err()
		if err != nil {
			return fmt.Errorf("could not create service: %v", err)
		}
	}
	return nil
}
