# Hackney Playbus Admin Console

[The hackney playbus](http://hackneyplaybus.com/) is a childrens charity located in the London borough of Hackney. This project is to help them to better measure effectivness of their work and track who they are serving. This is required for many of their grants and will help them to make decisions in the future on where best to focus efforts.

As this is a charity, one of the main goals of this project is to be as inexpensive as possible. With that in mind, effort has been made to fit this project into the GCP free tier. It should be free to run with the chance that it will cost a very small sum (tens of cents) in some occasions.

# Architecture

The project runs in Google Cloud Project (GCP) and uses a number of managed services therein. 
* Site and Code execution 
    Go 1.8 standard Google App Engine
* Online storage
    Google Datastore
* Analytics
    Google BigQuery
* Backups 
    Google Cloud Storage
* Report Generation
    Google Datastudio
    Google Sheets
* Frontend
    Angular

## App Engine 
Google App Engine (GAE) hosts the static site as well as executes the Go code. It is set up to scale to a single machine on demand and shrink to 0 machines fairly quickly. The google free tier is 9 hours a day of instance time. The Hackney Playbus staff should remain under that bar with regular usage.

To deploy to app engine:

```
gcloud app deploy app.yaml
gcloud app deploy cron.yaml
gcloud app deploy index.yaml
```

### Security
The project uses the security features built in to GAE. All traffic must be sent via https and traffic is restricted to logged in users. Further, only users who hold accounts on hackneyplaybus.org are able to access the frontend or data endpoints.

### Backups
Everyday at midnight a backup cron job is run. This dumps the datastore database to the default app engine bucket in Google Cloud Storage. When this is complete a seperate cron is run that pulls that data into bigquery. This will truncate the current bigquery tables, replacing them with the newly dumped data. GCS has a 5GB free tier. After some time (likely quite sometime) there might be enough backups in the bucket to hit this limit. Old backups should be deleted in this case.

## Datastore

All realtime data is store in Datastore. The following Kinds are used:

* carer
* child
* location
* mapskey
* notes
    This has an index on it
* project
* referral
* service
* visit

Although there is no explicite kind for a family, a family is made up of all things that share a common familyId. 

### Google Maps Key
A google maps key is manually added to Datastore to allow access to the google maps api. It must be stored under the Kind `mapskey` and the ID `mapskey` as a string.

## BigQuery
BigQuery is used as an analitics database to feed into google sheets and datastudio. The tables are created from datastore backups and the schemas are defined by those backups. 

### Google Sheets
A spreadsheet has been created with a script that will pull data from bigquery into the sheet. This spreadsheet can only be accessed by members of the hackneyplaybus.org domain.

### Google Datastudio
To make dynamic reports, google datastudio is used. It hooks into bigquery with a number of custom sql statements as well as the raw tables. This is embeded in the site.

## Angular Frontend
The Angular 4 framework is used to create the front end. It can be built by running 
```
ng build
```
in the angular directory. This is the first angular project I have created as well as the first time I have used typescript... apologies to whoever might one day have to maintain this... I am not a frontend developer.

> One day, I should write some tests for this.