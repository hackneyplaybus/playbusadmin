package app

import (
	"net/http"

	"github.com/hackneyplaybus/playbusadmin/packages/handlers"
)

func init() {
	// http.HandleFunc("/child", handlers.WriteChildHandler)
	//http.HandleFunc("/backup", handlers.Backup)
	http.HandleFunc("/ethnicitylist", handlers.CatchPanic(handlers.EthnicityList))
	http.HandleFunc("/child/autocomplete", handlers.CatchPanic(handlers.AutocompleteChildHandler))
	http.HandleFunc("/child/create", handlers.CatchPanic(handlers.WriteChildHandler))
	http.HandleFunc("/child/photoconsent", handlers.CatchPanic(handlers.ChildPhotoConsentHandler))
	http.HandleFunc("/carer/photoconsent", handlers.CatchPanic(handlers.CarerPhotoConsentHandler))
	http.HandleFunc("/carer/create", handlers.CatchPanic(handlers.WriteCarerHandler))
	http.HandleFunc("/carer/autocomplete", handlers.CatchPanic(handlers.AutocompleteCarerHandler))
	http.HandleFunc("/family/all", handlers.CatchPanic(handlers.ReadFamilyHandler))

}
