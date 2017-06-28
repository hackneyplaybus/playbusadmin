package handlers

import (
	"encoding/json"
	"errors"
	"net/http"
	"runtime/debug"

	"golang.org/x/net/context"

	"google.golang.org/appengine"
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

func CatchPanic(f func(w http.ResponseWriter, r *http.Request)) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		defer func() {
			if rec := recover(); rec != nil {
				ctx := appengine.NewContext(r)
				log.Errorf(ctx, "Caught Panic %v, %v", rec, string(debug.Stack()))
				// find out exactly what the error was and set err
				var err error
				switch x := rec.(type) {
				case string:
					err = errors.New(x)
				case error:
					err = x
				default:
					err = errors.New("Unknown panic")
				}
				if err != nil {

					log.Errorf(ctx, "Error: %v", err)
				}
			}
		}()
		f(w, r)
	}
}
