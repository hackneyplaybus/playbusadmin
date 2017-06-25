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

	// This is set for autocomplete
	LoweredNameSet []string `json:"-"`
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
		"Greek/Greek Cypriot":                   struct{}{},
		"Turkish":                               struct{}{},
		"Turkish Cypriot":                       struct{}{},
		"White Eastern European":                struct{}{},
		"White Western European":                struct{}{},
		"White Other":                           struct{}{},
		"Gypsy/Roma":                            struct{}{},
		"Black/Black British Caribbean":         struct{}{},
		"Black/Black British Angolan":           struct{}{},
		"Black/Black British Congolese":         struct{}{},
		"Black/Black British Ghanaian":          struct{}{},
		"Black/Black British Nigerian":          struct{}{},
		"Black/Black British Sierra Leonean":    struct{}{},
		"Black/Black British Somali":            struct{}{},
		"Black/Black British Sudanese":          struct{}{},
		"Black/Black British any other African": struct{}{},
		"Any other black background":            struct{}{},
		"Mixed white and black Caribbean":       struct{}{},
		"Mixed white and black African":         struct{}{},
		"Mixed white and Asian":                 struct{}{},
		"Any other mixed background":            struct{}{},
		"Asian/British Asian Indian":            struct{}{},
		"Asian/British Asian Pakistani":         struct{}{},
		"Asian/British Asian Bangladeshi":       struct{}{},
		"Other Asian background":                struct{}{},
		"Afghan":                                struct{}{},
		"Kurdish":                               struct{}{},
		"Vietnamese":                            struct{}{},
		"Latin/South/Central American":          struct{}{},
		"Chinese":                               struct{}{},
		"Other ethnic group":                    struct{}{},
		"White English":                         struct{}{},
		"White Scottish":                        struct{}{},
		"White Welsh":                           struct{}{},
		"White Irish":                           struct{}{},
		"Traveller of Irish Heritage":           struct{}{},
		"Albanian":                              struct{}{},
	}
)
