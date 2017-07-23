package handlers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/hackneyplaybus/playbusadmin/packages/dao"
	"github.com/hackneyplaybus/playbusadmin/packages/wire"
	"google.golang.org/appengine"
)

func WriteVisitHandler(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	if r.Method == "POST" {
		bb, err := ioutil.ReadAll(r.Body)
		defer r.Body.Close()
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Error decoding payload")
			return
		}

		visit := &wire.Visit{}
		if err = json.Unmarshal(bb, visit); err != nil {
			writeError(ctx, w, r, err, http.StatusBadRequest, "Bad message format")
			return
		}

		err = dao.CreateVisit(ctx, visit)
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Unable to write to datastore")
			return
		}
		bb, err = json.Marshal(visit)
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Unable to write to datastore")
			return
		}
		w.Write(bb)
		return

	}
}

func DeleteVisit(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	if r.Method == "DELETE" {

		id := r.URL.Query().Get("id")
		if id == "" {
			writeError(ctx, w, r, fmt.Errorf("No id given"), http.StatusBadRequest, "No Id Given")
			return
		}

		err := dao.DeleteVisit(ctx, id)
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Unable to write to datastore")
			return
		}
		return
	}
}
