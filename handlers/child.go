package handlers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"google.golang.org/appengine"

	"dao"
	"wire"
)

func WriteChildHandler(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	if r.Method == "POST" {
		bb, err := ioutil.ReadAll(r.Body)
		defer r.Body.Close()
		if err != nil {
			writeError(w, err, http.StatusInternalServerError, "Error decoding payload")
			return
		}

		child := &wire.Child{}
		if err = json.Unmarshal(bb, child); err != nil {
			writeError(w, err, http.StatusBadRequest, "Bad message format")
			return
		}

		err = dao.CreateChild(ctx, child)
		if err != nil {
			writeError(w, err, http.StatusInternalServerError, "Unable to write to datastore")
			return
		}

		fmt.Fprintf(w, "Got Child %s", child.Name)
		return

	} else if r.Method == "GET" {

		name := r.URL.Query().Get("name")
		newChild, err := dao.ReadChild(ctx, name)
		if err != nil {
			writeError(w, err, http.StatusInternalServerError, "Unable to write to datastore")
			return
		}

		fmt.Fprintf(w, "Read Child %s", newChild.Name)
	}
}
