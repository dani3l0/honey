package config

type Client struct {
	DarkMode           string `yaml:"dark_mode" json:"dark_mode"`
	Blur               bool `yaml:"blur" json:"blur"`
	Animations         string `yaml:"animations" json:"animations"`
	OpenInNewTab       bool `yaml:"open_in_new_tab" json:"open_in_new_tab"`
}

var clientDefaults = Client{
	DarkMode:           "auto",
	Blur:               true,
	Animations:         "default",
	OpenInNewTab:       true,
}
