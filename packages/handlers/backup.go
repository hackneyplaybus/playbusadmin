package handlers

import (
	"fmt"
	"net/http"

	"golang.org/x/net/context"

	"cloud.google.com/go/bigquery"
	"cloud.google.com/go/storage"
	"google.golang.org/api/iterator"
	"google.golang.org/appengine"
	"google.golang.org/appengine/file"
	"google.golang.org/appengine/log"
)

func Backup(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)

	names, err := getBuckets(ctx)
	if err != nil {
		log.Errorf(ctx, "Failed to list buckets: %v", err)
		return
	}
	for _, bucket := range names {
		log.Infof(ctx, "Bucket: %s ", bucket)
	}

	// err = loadBQ(ctx, names)
	// if err != nil {
	// 	log.Errorf("Failed to load BQ: %v", err)
	// 	return
	// }

	// if err = deleteBuckets(); err != nil {
	// 	log.Errorf("Failed to Delete buckets: %v", err)
	// 	return
	// }

}

func getBuckets(ctx context.Context) ([]string, error) {
	bucketStr, err := file.DefaultBucketName(ctx)
	if err != nil {
		return nil, err
	}

	gcsClient, err := storage.NewClient(ctx)
	if err != nil {
		return nil, err
	}

	backups := []string{}
	bh := gcsClient.Bucket(bucketStr)
	itr := bh.Objects(ctx, nil)
	for {
		objAttrs, err := itr.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			return nil, err
		}
		backups = append(backups, objAttrs.MediaLink)
	}
	return backups, nil
}

func deleteBuckets(ctx context.Context, buckets []string) error {
	bucketStr, err := file.DefaultBucketName(ctx)
	if err != nil {
		return err
	}

	gcsClient, err := storage.NewClient(ctx)
	if err != nil {
		return err
	}

	bh := gcsClient.Bucket(bucketStr)
	for _, obj := range buckets {
		oh := bh.Object(obj)
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

	myDataset := bq.Dataset("playbus-data")
	jobs := make([]*bigquery.Job, len(backups))
	for _, url := range backups {
		gcsRef := bigquery.NewGCSReference(url)
		gcsRef.SourceFormat = "DATASTORE_BACKUP"
		loader := myDataset.Table("dest").LoaderFrom(gcsRef)
		loader.CreateDisposition = bigquery.CreateNever
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
