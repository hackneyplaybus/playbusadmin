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

func AutocompleteCarerHandler(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	term := r.URL.Query().Get("term")
	if term == "" {
		bb, err := json.Marshal([]*wire.Child{})
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Error decoding payload")
			return
		}

		w.Write(bb)
		return
	}
	carer, err := dao.AutoCompleteCarer(ctx, term)
	if err != nil {
		writeError(ctx, w, r, err, http.StatusInternalServerError, "Error decoding payload")
		return
	}
	bb, err := json.Marshal(wire.SearchResponse{
		Carers: carer,
	})
	if err != nil {
		writeError(ctx, w, r, err, http.StatusInternalServerError, "Error decoding payload")
		return
	}

	w.Write(bb)

}

func CarerConsentHandler(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	if r.Method == "POST" {
		bb, err := ioutil.ReadAll(r.Body)
		defer r.Body.Close()
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Error decoding payload")
			return
		}

		pcr := &wire.CarerConsentRequest{}
		if err = json.Unmarshal(bb, pcr); err != nil {
			writeError(ctx, w, r, err, http.StatusBadRequest, "Bad message format")
			return
		}

		child, err := dao.UpdateCarerConsent(ctx, pcr.CarerId, pcr.InfoConsent, pcr.PhotoConsent)
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Error updating consent")
			return
		}
		bb, err = json.Marshal(child)
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Unable to marshal child")
			return
		}
		w.Write(bb)
		return
	}
}

func WriteCarerHandler(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	if r.Method == "POST" {
		bb, err := ioutil.ReadAll(r.Body)
		defer r.Body.Close()
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Error decoding payload")
			return
		}

		carer := &wire.Carer{}
		if err = json.Unmarshal(bb, carer); err != nil {
			writeError(ctx, w, r, err, http.StatusBadRequest, "Bad message format")
			return
		}

		latlng, err := domain.Geocode(ctx, domain.ConstructAddress(carer.Address, carer.PostalCode, carer.City))
		if err != nil {
			log.Warningf(ctx, "Error geocoding address: %v", err)
		} else {
			carer.Latitude = latlng.Lat
			carer.Longitude = latlng.Lng
		}

		err = dao.CreateCarer(ctx, carer)
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Unable to write to datastore")
			return
		}
		bb, err = json.Marshal(carer)
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Unable to write to datastore")
			return
		}
		w.Write(bb)
		return

	}
}

func DeleteCarer(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	if r.Method == "DELETE" {
		id := r.URL.Query().Get("id")
		if id == "" {
			writeError(ctx, w, r, fmt.Errorf("No id given"), http.StatusBadRequest, "No Id Given")
			return
		}

		err := dao.DeleteCarer(ctx, id)
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Unable to write to datastore")
			return
		}
		return
	}
}
