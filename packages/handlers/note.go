package handlers

import (
	"encoding/json"
	"io/ioutil"
	"net/http"

	"github.com/hackneyplaybus/playbusadmin/packages/dao"
	"github.com/hackneyplaybus/playbusadmin/packages/wire"
	"google.golang.org/appengine"
	"google.golang.org/appengine/user"
)

func WriteNoteHandler(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	if r.Method == "POST" {
		bb, err := ioutil.ReadAll(r.Body)
		defer r.Body.Close()
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Error decoding payload")
			return
		}

		note := &wire.Note{}
		if err = json.Unmarshal(bb, note); err != nil {
			writeError(ctx, w, r, err, http.StatusBadRequest, "Bad message format")
			return
		}

		u := user.Current(ctx)
		if u != nil {
			note.NoteTaker = u.Email
		}

		err = dao.CreateNote(ctx, note)
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Unable to write to datastore")
			return
		}
		bb, err = json.Marshal(note)
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Unable to write to datastore")
			return
		}
		w.Write(bb)
		return

	}
}
