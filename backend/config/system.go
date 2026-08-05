package config

import "time"

type System struct {
	ListenAddr           string        `yaml:"listen_addr" json:"listen_addr"`
	StaticBackgroundsDir string        `yaml:"static_backgrounds_dir" json:"static_backgrounds_dir"`
	StaticIconsDir       string        `yaml:"static_icons_dir" json:"static_icons_dir"`
	IsUnderSubdomain     bool          `yaml:"is_under_subdomain" json:"is_under_subdomain"`
	AdminPanelEnabled    bool          `yaml:"admin_panel_enabled" json:"admin_panel_enabled"`
	CookieLifetime       time.Duration `yaml:"cookie_lifetime" json:"cookie_lifetime"`
	Version              string        `yaml:"-" json:"version"`
}

var systemDefaults = System{
	ListenAddr:           "0.0.0.0:4208",
	StaticBackgroundsDir: "./res/backgrounds",
	StaticIconsDir:       "./res/icons",
	IsUnderSubdomain:     false,
	AdminPanelEnabled:    true,
	CookieLifetime:       time.Hour * 24 * 7,
	Version:              "v3-" + time.Now().Format("20060102_1504"),
}
