package config

type Client struct {
	DarkMode           bool `yaml:"dark_mode" json:"dark_mode"`
	DeviceDarkMode     bool `yaml:"device_dark_mode" json:"device_dark_mode"`
	PingDots           bool `yaml:"ping_dots_client" json:"ping_dots_client"`
	Blur               bool `yaml:"blur_enabled" json:"blur_enabled"`
	Animations         bool `yaml:"animations_enabled" json:"animations_enabled"`
	AnimationsDuration int  `yaml:"animations_duration_ms" json:"animations_duration_ms"`
	OpenInNewTab       bool `yaml:"open_in_new_tab" json:"open_in_new_tab"`
	RotateIconsOnHover bool `yaml:"rotate_icons_on_hover" json:"rotate_icons_on_hover"`
}

var clientDefaults = Client{
	DarkMode:           false,
	DeviceDarkMode:     true,
	PingDots:           true,
	Blur:               true,
	Animations:         true,
	AnimationsDuration: 3,
	OpenInNewTab:       true,
	RotateIconsOnHover: false,
}
