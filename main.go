package hello

import (
	"net/http"

	"handlers"
)

func init() {
	//http.HandleFunc("/", handlers.RootHandler)
	http.HandleFunc("/child", handlers.WriteChildHandler)
}
