package config

type Client struct {
	DarkMode           bool `yaml:"dark_mode" json:"dark_mode"`
	DeviceDarkMode     bool `yaml:"device_dark_mode" json:"device_dark_mode"`
	Blur               bool `yaml:"blur" json:"blur"`
	Animations         bool `yaml:"animations" json:"animations"`
	AnimationsDuration string  `yaml:"animations_duration" json:"animations_duration"`
	OpenInNewTab       bool `yaml:"open_in_new_tab" json:"open_in_new_tab"`
}

var clientDefaults = Client{
	DarkMode:           false,
	DeviceDarkMode:     true,
	Blur:               true,
	Animations:         true,
	AnimationsDuration: "default",
	OpenInNewTab:       true,
}
