package app

import (
	"net/http"

	"github.com/hackneyplaybus/playbusadmin/packages/handlers"
)

func init() {
	//http.HandleFunc("/backup", handlers.Backup)

	http.HandleFunc("/family/all", handlers.CatchPanic(handlers.ReadFamilyHandler))

	http.HandleFunc("/child/autocomplete", handlers.CatchPanic(handlers.AutocompleteChildHandler))
	http.HandleFunc("/child/create", handlers.CatchPanic(handlers.WriteChildHandler))
	http.HandleFunc("/child/photoconsent", handlers.CatchPanic(handlers.ChildPhotoConsentHandler))

	http.HandleFunc("/carer/photoconsent", handlers.CatchPanic(handlers.CarerPhotoConsentHandler))
	http.HandleFunc("/carer/create", handlers.CatchPanic(handlers.WriteCarerHandler))
	http.HandleFunc("/carer/autocomplete", handlers.CatchPanic(handlers.AutocompleteCarerHandler))

	http.HandleFunc("/note/create", handlers.CatchPanic(handlers.WriteNoteHandler))

	http.HandleFunc("/location/create", handlers.CatchPanic(handlers.WriteLocationHandler))
	http.HandleFunc("/location/all", handlers.CatchPanic(handlers.ReadLocationsHandler))

	http.HandleFunc("/mapskey", handlers.CatchPanic(handlers.MapKeyHandler))
	http.HandleFunc("/ethnicitylist", handlers.CatchPanic(handlers.EthnicityList))

	http.HandleFunc("/search/all", handlers.CatchPanic(handlers.SearchHandler))

}
