package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/hackneyplaybus/playbusadmin/packages/dao"
	"github.com/hackneyplaybus/playbusadmin/packages/wire"
	"google.golang.org/appengine"
)

func SearchHandler(w http.ResponseWriter, r *http.Request) {
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
	children, err := dao.AutoCompleteChild(ctx, term, "")
	if err != nil {
		writeError(ctx, w, r, err, http.StatusInternalServerError, "Error decoding payload")
		return
	}

	carers, err := dao.AutoCompleteCarerEmail(ctx, term)
	if err != nil {
		writeError(ctx, w, r, err, http.StatusInternalServerError, "Error decoding payload")
		return
	}

	bb, err := json.Marshal(&wire.SearchResponse{
		Carers:   carers,
		Children: children,
	})
	if err != nil {
		writeError(ctx, w, r, err, http.StatusInternalServerError, "Error decoding payload")
		return
	}

	w.Write(bb)

}
