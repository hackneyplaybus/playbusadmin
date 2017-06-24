package handlers

import (
	"encoding/json"
	"net/http"

	"golang.org/x/net/context"

	"google.golang.org/appengine/log"
)

type WireError struct {
	Description string `json:"description,omitempty"`
	Error       string `json:"error,omitempty"`
}

func writeError(ctx context.Context, w http.ResponseWriter, r *http.Request, err error, code int, message string) {
	log.Errorf(ctx, "Handler Error: Endpoint: %s Error: %s, Message: %s", r.URL.Path, err, message)

	w.WriteHeader(code)
	bb, _ := json.Marshal(&WireError{
		Description: message,
		Error:       err.Error(),
	})
	w.Write(bb)
}
