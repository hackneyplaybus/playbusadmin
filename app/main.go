package app

import (
	"net/http"

	"github.com/hackneyplaybus/playbusadmin/packages/handlers"
)

func init() {
	http.HandleFunc("/backup", handlers.Backup)

	http.HandleFunc("/family/all", handlers.CatchPanic(handlers.ReadFamilyHandler))

	http.HandleFunc("/child/autocomplete", handlers.CatchPanic(handlers.AutocompleteChildHandler))
	http.HandleFunc("/child/create", handlers.CatchPanic(handlers.WriteChildHandler))
	http.HandleFunc("/child/photoconsent", handlers.CatchPanic(handlers.ChildConsentHandler))
	http.HandleFunc("/child", handlers.CatchPanic(handlers.DeleteChild))

	http.HandleFunc("/carer/photoconsent", handlers.CatchPanic(handlers.CarerConsentHandler))
	http.HandleFunc("/carer/create", handlers.CatchPanic(handlers.WriteCarerHandler))
	http.HandleFunc("/carer/autocomplete", handlers.CatchPanic(handlers.AutocompleteCarerHandler))
	http.HandleFunc("/carer", handlers.CatchPanic(handlers.DeleteCarer))

	http.HandleFunc("/note/create", handlers.CatchPanic(handlers.WriteNoteHandler))

	http.HandleFunc("/location/create", handlers.CatchPanic(handlers.WriteLocationHandler))
	http.HandleFunc("/location/all", handlers.CatchPanic(handlers.ReadLocationsHandler))
	http.HandleFunc("/location", handlers.CatchPanic(handlers.DeleteLocation))

	http.HandleFunc("/project/create", handlers.CatchPanic(handlers.WriteProjectHandler))
	http.HandleFunc("/project/all", handlers.CatchPanic(handlers.ReadProjectsHandler))

	http.HandleFunc("/service/create", handlers.CatchPanic(handlers.WriteServiceHandler))
	http.HandleFunc("/service/all", handlers.CatchPanic(handlers.ReadServicesHandler))

	http.HandleFunc("/visit/create", handlers.CatchPanic(handlers.WriteVisitHandler))
	http.HandleFunc("/visit", handlers.CatchPanic(handlers.DeleteVisit))

	http.HandleFunc("/referral/create", handlers.CatchPanic(handlers.WriteReferralHandler))
	http.HandleFunc("/referral", handlers.CatchPanic(handlers.DeleteReferral))

	http.HandleFunc("/mapskey", handlers.CatchPanic(handlers.MapKeyHandler))
	http.HandleFunc("/ethnicitylist", handlers.CatchPanic(handlers.EthnicityList))
	http.HandleFunc("/benifitlist", handlers.CatchPanic(handlers.BenifitList))

	http.HandleFunc("/search/all", handlers.CatchPanic(handlers.SearchHandler))

}
