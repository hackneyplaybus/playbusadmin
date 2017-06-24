package handlers

import (
	"fmt"
	"net/http"
)

func writeErrorPage(w http.ResponseWriter, err error) {
	// TODO: Template error page out.
}

func writeError(w http.ResponseWriter, err error, code int, message string) {
	w.WriteHeader(code)
	fmt.Fprintf(w, "Error: %v", err)
}
