package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/hackneyplaybus/playbusadmin/packages/dao"
	"google.golang.org/appengine"
)

func ReadFamilyHandler(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	if r.Method == "GET" {
		familyId := r.URL.Query().Get("familyId")

		family, err := dao.ReadFamily(ctx, familyId)
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Unable to read family")
			return
		}

		bb, err := json.Marshal(family)
		if err != nil {
			writeError(ctx, w, r, err, http.StatusInternalServerError, "Unable to marshal family")
			return
		}
		w.Write(bb)
	}
}
