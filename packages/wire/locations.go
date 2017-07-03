package wire

type Location struct {
	LocationId string `json:"location_id,omitempty"`

	Name        string  `json:"name,omitempty"`
	Description string  `json:"description,omitempty"`
	Address     string  `json:"address,omitempty"`
	PostalCode  string  `json:"postal_code,omitempty"`
	City        string  `json:"city,omitempty"`
	Country     string  `json:"country,omitempty"`
	Latitude    float64 `json:"latitude,omitempty"`
	Longitude   float64 `json:"longitude,omitempty"`

	Projects []*Project `datastore:"-" json:"projects,omitempty"`
}

type MapKeyResponse struct {
	MapKey string `json:"map_key,omitempty"`
}
