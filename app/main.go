package app

import (
	"net/http"

	"github.com/hackneyplaybus/playbusadmin/packages/handlers"
)

func init() {
	http.HandleFunc("/backup", handlers.Backup)

	http.HandleFunc("/api/family/all", handlers.CatchPanic(handlers.ReadFamilyHandler))

	http.HandleFunc("/api/child/autocomplete", handlers.CatchPanic(handlers.AutocompleteChildHandler))
	http.HandleFunc("/api/child/create", handlers.CatchPanic(handlers.WriteChildHandler))
	http.HandleFunc("/api/child/photoconsent", handlers.CatchPanic(handlers.ChildConsentHandler))
	http.HandleFunc("/api/child", handlers.CatchPanic(handlers.DeleteChild))

	http.HandleFunc("/api/carer/photoconsent", handlers.CatchPanic(handlers.CarerConsentHandler))
	http.HandleFunc("/api/carer/create", handlers.CatchPanic(handlers.WriteCarerHandler))
	http.HandleFunc("/api/carer/autocomplete", handlers.CatchPanic(handlers.AutocompleteCarerHandler))
	http.HandleFunc("/api/carer", handlers.CatchPanic(handlers.DeleteCarer))

	http.HandleFunc("/api/note/create", handlers.CatchPanic(handlers.WriteNoteHandler))

	http.HandleFunc("/api/location/create", handlers.CatchPanic(handlers.WriteLocationHandler))
	http.HandleFunc("/api/location/all", handlers.CatchPanic(handlers.ReadLocationsHandler))
	http.HandleFunc("/api/location", handlers.CatchPanic(handlers.DeleteLocation))

	http.HandleFunc("/api/project/create", handlers.CatchPanic(handlers.WriteProjectHandler))
	http.HandleFunc("/api/project/all", handlers.CatchPanic(handlers.ReadProjectsHandler))
	http.HandleFunc("/api/project", handlers.CatchPanic(handlers.DeleteProject))

	http.HandleFunc("/api/service/create", handlers.CatchPanic(handlers.WriteServiceHandler))
	http.HandleFunc("/api/service/all", handlers.CatchPanic(handlers.ReadServicesHandler))
	http.HandleFunc("/api/service", handlers.CatchPanic(handlers.DeleteService))

	http.HandleFunc("/api/visit/create", handlers.CatchPanic(handlers.WriteVisitHandler))
	http.HandleFunc("/api/visit", handlers.CatchPanic(handlers.DeleteVisit))

	http.HandleFunc("/api/referral/create", handlers.CatchPanic(handlers.WriteReferralHandler))
	http.HandleFunc("/api/referral", handlers.CatchPanic(handlers.DeleteReferral))

	http.HandleFunc("/api/mapskey", handlers.CatchPanic(handlers.MapKeyHandler))
	http.HandleFunc("/api/ethnicitylist", handlers.CatchPanic(handlers.EthnicityList))
	http.HandleFunc("/api/benefitlist", handlers.CatchPanic(handlers.BenefitList))

	http.HandleFunc("/api/search/all", handlers.CatchPanic(handlers.SearchHandler))

}
