package wire

type Project struct {
	ProjectId string `json:"project_id,omitempty"`
	Name      string `json:"name,omitempty"`
	Funder    string `json:"funder,omitempty"`
	// TODO: FURTHER PROJECT DETAILS

	Locations []*Location `datastore:"-" json:"locations,omitempty"`
}
