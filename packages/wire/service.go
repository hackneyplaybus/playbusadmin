package wire

type Service struct {
	ServiceId   string `json:"service_id,omitempty"`
	Name        string `json:"name,omitempty"`
	Description string `json:"description,omitempty"`
}
