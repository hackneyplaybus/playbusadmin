package handlers

import (
	"encoding/json"
	"net/http"
	"sort"

	"google.golang.org/appengine"

	"github.com/hackneyplaybus/playbusadmin/packages/wire"
)

type byAlphabet []string

func (a byAlphabet) Len() int           { return len(a) }
func (a byAlphabet) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a byAlphabet) Less(i, j int) bool { return a[i] < a[j] }

func EthnicityList(w http.ResponseWriter, r *http.Request) {
	list := make([]string, 0, len(wire.ValidEthnicity))
	for eth, _ := range wire.ValidEthnicity {
		list = append(list, eth)
	}

	sort.Sort(byAlphabet(list))

	bb, err := json.Marshal(list)
	if err != nil {
		writeError(appengine.NewContext(r), w, r, err, http.StatusInternalServerError, "Unable to get list")
	}

	w.Write(bb)
}

func BenifitList(w http.ResponseWriter, r *http.Request) {
	list := make([]string, 0, len(wire.ValidBenefits))
	for eth, _ := range wire.ValidBenefits {
		list = append(list, eth)
	}

	sort.Sort(byAlphabet(list))

	bb, err := json.Marshal(list)
	if err != nil {
		writeError(appengine.NewContext(r), w, r, err, http.StatusInternalServerError, "Unable to get list")
	}

	w.Write(bb)
}
