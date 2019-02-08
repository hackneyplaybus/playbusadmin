package handlers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"google.golang.org/appengine"
	"google.golang.org/appengine/log"
	"google.golang.org/appengine/user"

	"github.com/hackneyplaybus/playbusadmin/packages/dao"
	"github.com/hackneyplaybus/playbusadmin/packages/domain"
	"github.com/hackneyplaybus/playbusadmin/packages/wire"
)

func AutocompleteChildHandler(w http.ResponseWriter, r *http.Request) {
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
	children, err := dao.AutoCompleteChild(ctx, term, r.URL.Query().Get("name_type"))
	if err != nil {
		writeError(ctx, w, r, err, http.StatusInternalServerError, "Error decoding payload")
		return
	}

	bb, err := json.Marshal(wire.SearchResponse{
		Children: children,
	})
	if err != nil {
		writeError(ctx, w, r, err, http.StatusInternalServerError, "Error decoding payload")
		return
	}

	w.Write(bb)

}

func ChildConsentHandler(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	if r.Method == "POST" {
		bb, err := ioutil.ReadAll(r.Body)
		defer r.Body.Close()
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Error decoding payload")
			return
		}

		pcr := &wire.ChildConsentRequest{}
		if err = json.Unmarshal(bb, pcr); err != nil {
			writeError(ctx, w, r, err, http.StatusBadRequest, "Bad message format")
			return
		}

		child, err := dao.UpdateChildConsent(ctx, pcr.ChildId, pcr.InfoConsent, pcr.PhotoConsent)
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

func WriteChildHandler(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	if r.Method == "POST" {
		bb, err := ioutil.ReadAll(r.Body)
		defer r.Body.Close()
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Error decoding payload")
			return
		}

		child := &wire.Child{}
		if err = json.Unmarshal(bb, child); err != nil {
			writeError(ctx, w, r, err, http.StatusBadRequest, "Bad message format")
			return
		}

		latlng, err := domain.Geocode(ctx, domain.ConstructAddress(child.Address, child.PostalCode, child.City))
		if err != nil {
			log.Warningf(ctx, "Error geocoding address: %v", err)
		} else {
			child.Latitude = latlng.Lat
			child.Longitude = latlng.Lng
		}

		err = dao.CreateChild(ctx, child)
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Unable to write to datastore")
			return
		}
		bb, err = json.Marshal(child)
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Unable to write to datastore")
			return
		}
		w.Write(bb)
		return

	} else if r.Method == "GET" {

		name := r.URL.Query().Get("name")
		if name != "" {
			newChild, err := dao.AutoCompleteChild(ctx, name, "")
			if err != nil {
				writeError(ctx, w, r, err, http.StatusInternalServerError, "Unable to read from datastore")
				return
			}

			fmt.Fprintf(w, "Read Child %s", newChild[0].Name)
			return
		}
		term := r.URL.Query().Get("prefix")
		if term != "" {
			children, err := dao.AutoCompleteChild(ctx, term, "")
			if err != nil {
				writeError(ctx, w, r, err, http.StatusInternalServerError, "Unable to read from datastore")
				return
			}

			for _, child := range children {
				fmt.Fprintf(w, "%s\n", child.Name)
			}

			return
		}

	}
}

func DeleteChild(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	if r.Method == "DELETE" {

		id := r.URL.Query().Get("id")
		if id == "" {
			writeError(ctx, w, r, fmt.Errorf("No id given"), http.StatusBadRequest, "No Id Given")
			return
		}

		err := dao.DeleteChild(ctx, id)
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Unable to write to datastore")
			return
		}
		return
	}
}

var NotLoggedIn = fmt.Errorf("Not Logged In")

func auth(w http.ResponseWriter, r *http.Request) (*user.User, error) {
	ctx := appengine.NewContext(r)
	u := user.Current(ctx)
	if u == nil {
		// TODO: Write login page response
		return nil, NotLoggedIn
	}
	return u, nil
}
