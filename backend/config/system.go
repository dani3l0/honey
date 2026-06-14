package config

import "time"

type System struct {
	ListenAddr           string        `yaml:"listen_addr" json:"listen_addr"`
	PingDots             bool          `yaml:"ping_dots" json:"ping_dots"`
	PingDotsCacheTime    time.Duration `yaml:"ping_dots_cache_time" json:"ping_dots_cache_time"`
	StaticBackgroundsDir string        `yaml:"static_backgrounds_dir" json:"static_backgrounds_dir"`
	StaticIconsDir       string        `yaml:"static_icons_dir" json:"static_icons_dir"`
	IsUnderSubdomain     bool          `yaml:"is_under_subdomain" json:"is_under_subdomain"`
	AdminPanelEnabled    bool          `yaml:"admin_panel_enabled" json:"admin_panel_enabled"`
	CookieLifetime       time.Duration `yaml:"cookie_lifetime" json:"cookie_lifetime"`
}

var systemDefaults = System{
	ListenAddr:           "0.0.0.0:4208",
	PingDots:             true,
	PingDotsCacheTime:    time.Minute * 5,
	StaticBackgroundsDir: "./static/backgrounds",
	StaticIconsDir:       "./static/icons",
	IsUnderSubdomain:     false,
	AdminPanelEnabled:    true,
	CookieLifetime:       time.Hour * 24 * 7,
}
