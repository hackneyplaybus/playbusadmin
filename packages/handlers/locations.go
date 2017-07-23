package handlers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/hackneyplaybus/playbusadmin/packages/dao"
	"github.com/hackneyplaybus/playbusadmin/packages/domain"
	"github.com/hackneyplaybus/playbusadmin/packages/wire"
	"google.golang.org/appengine"
	"google.golang.org/appengine/log"
)

func WriteLocationHandler(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	if r.Method == "POST" {
		bb, err := ioutil.ReadAll(r.Body)
		defer r.Body.Close()
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Error decoding payload")
			return
		}

		location := &wire.Location{}
		if err = json.Unmarshal(bb, location); err != nil {
			writeError(ctx, w, r, err, http.StatusBadRequest, "Bad message format")
			return
		}

		if location.Latitude == 0 && location.Longitude == 0 {
			latlng, err := domain.Geocode(ctx, domain.ConstructAddress(location.Address, location.PostalCode, location.City))
			if err != nil {
				log.Warningf(ctx, "Error geocoding address: %v", err)
			} else {
				location.Latitude = latlng.Lat
				location.Longitude = latlng.Lng
			}
		}

		err = dao.CreateLocation(ctx, location)
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Unable to write to datastore")
			return
		}
		bb, err = json.Marshal(location)
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Unable to write to datastore")
			return
		}
		w.Write(bb)
		return

	}
}

func ReadLocationsHandler(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	if r.Method == "GET" {

		locations, err := dao.ReadLocations(ctx)
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Unable to write to datastore")
			return
		}
		bb, err := json.Marshal(locations)
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Unable to write to datastore")
			return
		}
		w.Write(bb)
		return

	}
}

func DeleteLocation(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	if r.Method == "DELETE" {

		id := r.URL.Query().Get("id")
		if id == "" {
			writeError(ctx, w, r, fmt.Errorf("No id given"), http.StatusBadRequest, "No Id Given")
			return
		}

		err := dao.DeleteLocation(ctx, id)
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Unable to write to datastore")
			return
		}
		return
	}
}
