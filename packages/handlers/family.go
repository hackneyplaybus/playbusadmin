package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/hackneyplaybus/playbusadmin/packages/dao"
	"google.golang.org/appengine"
	"google.golang.org/appengine/log"
)

func ReadFamilyHandler(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	if r.Method == "GET" {
		familyId := r.URL.Query().Get("familyId")
		log.Infof(ctx, "getting family: %s", familyId)
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
