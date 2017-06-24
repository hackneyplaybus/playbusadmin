package hello

import (
	"net/http"

	"github.com/hackneyplaybus/playbusadmin/handlers"
)

func init() {
	//http.HandleFunc("/", handlers.RootHandler)
	http.HandleFunc("/child", handlers.WriteChildHandler)
}
