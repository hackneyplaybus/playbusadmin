package app

import (
	"net/http"

	"github.com/hackneyplaybus/playbusadmin/packages/handlers"
)

//"github.com/hackneyplaybus/playbusadmin/packages/handlers"

func init() {
	// http.HandleFunc("/child", handlers.WriteChildHandler)
	//http.HandleFunc("/backup", handlers.Backup)
	http.HandleFunc("/ethnicitylist", handlers.EthnicityList)
	http.HandleFunc("/autocompletechild", handlers.AutocompleteChildHandler)
	http.HandleFunc("/child/create", handlers.WriteChildHandler)

}
