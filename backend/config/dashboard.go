package config

type DashboardItem struct {
	Name        string `yaml:"name" json:"name"`
	Description string `yaml:"description" json:"description"`
	Url         string `yaml:"url" json:"url"`
	IconUrl     string `yaml:"icon_url" json:"icon_url"`
	PingDot     bool   `yaml:"ping_dot" json:"ping_dot"`
}

var dashboardItemsDefaults = []DashboardItem{
	{
		Name:        "First service",
		Description: "The first service ever added here.",
		Url:         "",
		IconUrl:     "",
		PingDot:     false,
	},
	{
		Name:        "Easter egg",
		Description: "Click to see what happens!",
		Url:         "https://www.youtube.com/watch?v=Iv61xZMss34",
		IconUrl:     "",
		PingDot:     false,
	},
}
