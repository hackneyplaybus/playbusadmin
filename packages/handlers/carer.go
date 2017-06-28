package handlers

import (
	"encoding/json"
	"io/ioutil"
	"net/http"

	"github.com/hackneyplaybus/playbusadmin/packages/dao"
	"github.com/hackneyplaybus/playbusadmin/packages/wire"
	"google.golang.org/appengine"
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
	bb, err := json.Marshal(carer)
	if err != nil {
		writeError(ctx, w, r, err, http.StatusInternalServerError, "Error decoding payload")
		return
	}

	w.Write(bb)

}

func CarerPhotoConsentHandler(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	if r.Method == "POST" {
		bb, err := ioutil.ReadAll(r.Body)
		defer r.Body.Close()
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Error decoding payload")
			return
		}

		pcr := &wire.CarerPhotoConsentRequest{}
		if err = json.Unmarshal(bb, pcr); err != nil {
			writeError(ctx, w, r, err, http.StatusBadRequest, "Bad message format")
			return
		}

		child, err := dao.UpdateCarerPhotoConsent(ctx, pcr.CarerId, pcr.PhotoConsent)
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
