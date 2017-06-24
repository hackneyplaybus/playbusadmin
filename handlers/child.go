package handlers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"google.golang.org/appengine"
	"google.golang.org/appengine/user"

	"github.com/hackneyplaybus/playbusadmin/dao"
	"github.com/hackneyplaybus/playbusadmin/wire"
)

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

		err = dao.CreateChild(ctx, child)
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Unable to write to datastore")
			return
		}

		fmt.Fprintf(w, "Got Child %s", child.Name)
		return

	} else if r.Method == "GET" {

		name := r.URL.Query().Get("name")
		if name != "" {
			newChild, err := dao.ReadChild(ctx, name)
			if err != nil {
				writeError(ctx, w, r, err, http.StatusInternalServerError, "Unable to read from datastore")
				return
			}

			fmt.Fprintf(w, "Read Child %s", newChild.Name)
			return
		}
		term := r.URL.Query().Get("prefix")
		if term != "" {
			children, err := dao.AutoCompleteChild(ctx, term)
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
