package handlers

import (
	"fmt"
	"net/http"
	"strings"

	"golang.org/x/net/context"

	"cloud.google.com/go/bigquery"
	"cloud.google.com/go/storage"
	"google.golang.org/api/iterator"
	"google.golang.org/appengine"
	"google.golang.org/appengine/log"
	"google.golang.org/appengine/runtime"
)

const (
	bucketStr = "playtest"
)

func Backup(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)

	names, attrs, err := getBuckets(ctx)
	if err != nil {
		log.Errorf(ctx, "Failed to list buckets: %v", err)
		return
	}

	err = runtime.RunInBackground(ctx, func(ctx context.Context) {
		err = loadBQ(ctx, names)
		if err != nil {
			log.Errorf(ctx, "Failed to load BQ: %v", err)
			return
		}

		err = deleteBuckets(ctx, attrs)
		if err != nil {
			log.Errorf(ctx, "Failed to delete buckets: %v", err)
			return
		}
	})
	if err != nil {
		log.Errorf(ctx, "Failed to run in background: %v", err)
		w.Write([]byte(err.Error()))
		return
	}
}

func getBuckets(ctx context.Context) ([]string, []*storage.ObjectAttrs, error) {

	gcsClient, err := storage.NewClient(ctx)
	if err != nil {
		return nil, nil, err
	}

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

		if strings.HasSuffix(objAttrs.Name, ".backup_info") {
			backups = append(backups, "gs://"+bucketStr+"/"+objAttrs.Name)
		}
		backupsAttrs = append(backupsAttrs, objAttrs)
	}
	return backups, backupsAttrs, nil
}

func deleteBuckets(ctx context.Context, buckets []*storage.ObjectAttrs) error {

	gcsClient, err := storage.NewClient(ctx)
	if err != nil {
		return err
	}

	bh := gcsClient.Bucket(bucketStr)
	for _, obj := range buckets {
		oh := bh.Object(obj.Name)
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
		urlArr := strings.Split(url, ".")
		if len(urlArr) == 2 {
			continue
		}

		gcsRef := bigquery.NewGCSReference(url)
		gcsRef.SourceFormat = "DATASTORE_BACKUP"
		loader := myDataset.Table(urlArr[1]).LoaderFrom(gcsRef)
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
