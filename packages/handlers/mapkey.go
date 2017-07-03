package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/hackneyplaybus/playbusadmin/packages/domain"
	"github.com/hackneyplaybus/playbusadmin/packages/wire"
	"google.golang.org/appengine"
)

func MapKeyHandler(w http.ResponseWriter, r *http.Request) {

	ctx := appengine.NewContext(r)
	key := domain.GetMapKey(ctx)
	bb, err := json.Marshal(&wire.MapKeyResponse{
		MapKey: key,
	})
	if err != nil {
		writeError(ctx, w, r, err, http.StatusInternalServerError, "Couldn't marshal map key")
		return
	}

	w.Write(bb)
}
