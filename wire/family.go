package wire

import "time"

type Family struct {
	FamilyId string   `json:"family_id,omitempty"`
	Children []*Child `json:"children,omitempty"`
	Carers   []*Carer `json:"carers,omitempty"`
	Notes    []*Note  `json:"notes,omitempty"`
}

type Child struct {
	FamilyId string `json:"family_id,omitempty"`
	// This is the ID value in datastore, manually set this
	ChildId      string    `datastore:"-" json:"child_id,omitempty"`
	Name         string    `json:"name,omitempty"`
	FirstName    string    `json:"first_name,omitempty"`
	LastName     string    `json:"last_name,omitempty"`
	DateOfBirth  string    `json:"date_of_birth,omitempty"`
	Ethnicity    string    `json:"ethnicity,omitempty"`
	Gender       string    `json:"gender,omitempty"`
	FirstSeen    time.Time `json:"first_seen,omitempty"`
	PhotoConsent bool      `json:"photo_consent,omitempty"`

	Locations []*Location `datastore:"-" json:"locations,omitempty"`

	// This is set for autocomplete
	LoweredNameSet []string `json:"-"`
}

type Note struct {
	FamilyId  string
	Timestamp time.Time `json:"timestamp,omitempty"`
	NoteTaker string    `json:"note_taker,omitempty"`
	Note      string    `json:"note,omitempty"`
}

type Referral struct {
	FamilyId     string    `json:"family_id,omitempty"`
	CarerId      string    `json:"carer_id,omitempty"`
	ReferredBy   string    `json:"referred_by,omitempty"`
	Service      string    `json:"service,omitempty"`
	DateReferred time.Time `json:"date_referred,omitempty"`
	DateRecorded time.Time `json:"date_recorded,omitempty"`
}

type Carer struct {
	FamilyId string `json:"family_id,omitempty"`
	// This is the ID value in datastore, manually set this on read
	CarerId       string    `datastore:"-" json:"carer_id,omitempty"`
	Name          string    `json:"name,omitempty"`
	FirstName     string    `json:"first_name,omitempty"`
	LastName      string    `json:"last_name,omitempty"`
	DateOfBirth   string    `json:"date_of_birth,omitempty"`
	Ethnicity     string    `json:"ethnicity,omitempty"`
	Gender        string    `json:"gender,omitempty"`
	Address       string    `json:"address,omitempty"`
	Postcode      string    `json:"postcode,omitempty"`
	Phone         string    `json:"phone,omitempty"`
	Email         string    `json:"email,omitempty"`
	Benefits      string    `json:"benefits,omitempty"`
	BenefitsOther string    `json:"benefits_other,omitempty"`
	LoneCarer     bool      `json:"lone_carer,omitempty"`
	FirstSeen     time.Time `json:"first_seen,omitempty"`

	Locations []*Location `datastore:"-" json:"locations,omitempty"`
	Referrals []*Referral `datastore:"-" json:"referrals,omitempty"`
}

type Location struct {
	FamilyId     string    `json:"family_id,omitempty"`
	ChildId      string    `json:"child_id,omitempty"`
	CarerId      string    `json:"carer_id,omitempty"`
	DateAttended time.Time `json:"date_attended,omitempty"`
	DateRecorded time.Time `json:"date_recorded,omitempty"`
	Project      string    `json:"project,omitempty"`
	Location     string    `json:"location,omitempty"`
}

var (
	// TODO: Probably put these in a db somewhere so they can be updated
	// without the need for code change

	ValidBenefits = map[string]struct{}{
		"IncomeSupport":    struct{}{},
		"JSA":              struct{}{},
		"WorkingTaxCredit": struct{}{},
		"ChildTaxCredit":   struct{}{},
		"HousingBenefit":   struct{}{},
		"DLAForAdults":     struct{}{},
		"DLAForChildren":   struct{}{},
		"ESA":              struct{}{},
		"other":            struct{}{},
	}
	ValidGenders = map[string]struct{}{
		"Male":   struct{}{},
		"Female": struct{}{},
		"Other":  struct{}{},
	}
	ValidEthnicity = map[string]struct{}{
		"Greek-GreekCypriot":                struct{}{},
		"Turkish":                           struct{}{},
		"TurkishCypriot":                    struct{}{},
		"WhiteEasternEuropean":              struct{}{},
		"WhiteWesternEuropean":              struct{}{},
		"WhiteOther":                        struct{}{},
		"Gypsy-Roma":                        struct{}{},
		"Black-BlackBritishCaribbean":       struct{}{},
		"Black-BlackBritishAngolan":         struct{}{},
		"Black-BlackBritishCongolese":       struct{}{},
		"Black-BlackBritishGhanaian":        struct{}{},
		"Black-BlackBritishNigerian":        struct{}{},
		"Black-BlackBritishSierraLeonean":   struct{}{},
		"Black-BlackBritishSomali":          struct{}{},
		"Black-BlackBritishSudanese":        struct{}{},
		"Black-BlackBritishanyotherAfrican": struct{}{},
		"Anyotherblackbackground":           struct{}{},
		"MixedwhiteandblackCaribbean":       struct{}{},
		"MixedwhiteandblackAfrican":         struct{}{},
		"MixedwhiteandAsian":                struct{}{},
		"Anyothermixedbackground":           struct{}{},
		"Asian-BritishAsianIndian":          struct{}{},
		"Asian-BritishAsianPakistani":       struct{}{},
		"Asian-BritishAsianBangladeshi":     struct{}{},
		"OtherAsianbackground":              struct{}{},
		"Afghan":                            struct{}{},
		"Kurdish":                           struct{}{},
		"Vietnamese":                        struct{}{},
		"Latin-South-CentralAmerican":       struct{}{},
		"Chinese":                           struct{}{},
		"Otherethnicgroup":                  struct{}{},
		"WhiteEnglish":                      struct{}{},
		"WhiteScottish":                     struct{}{},
		"WhiteWelsh":                        struct{}{},
		"WhiteIrish":                        struct{}{},
		"TravellerofIrishHeritage":          struct{}{},
		"Albanian":                          struct{}{},
	}
)
