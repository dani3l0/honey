package config

type DashboardItem struct {
	Name        string `yaml:"name" json:"name"`
	Description string `yaml:"description" json:"description"`
	Url         string `yaml:"url" json:"url"`
	IconUrl     string `yaml:"icon_url" json:"icon_url"`
}

var dashboardItemsDefaults = []DashboardItem{
	{
		Name:        "Web Search",
		Description: "Open Goolag and search da internet!",
		Url:         "about:blank",
		IconUrl:     "WebSearch.png",
	},
	{
		Name:        "AI",
		Description: "Pure intelligence, now on your machine.",
		Url:         "about:blank",
		IconUrl:     "AI.png",
	},
	{
		Name:        "System Monitor",
		Description: "Monitoring of hardware resource use.",
		Url:         "about:blank",
		IconUrl:     "SystemMonitor.png",
	},
	{
		Name:        "System Settings",
		Description: "AIO self-hosted server management suite.",
		Url:         "about:blank",
		IconUrl:     "Settings.png",
	},
	{
		Name:        "Speed Test",
		Description: "Network speed test utility, JS-free!",
		Url:         "about:blank",
		IconUrl:     "SpeedTest.png",
	},
	{
		Name:        "Weather",
		Description: "Check whether you need an umbrella today.",
		Url:         "about:blank",
		IconUrl:     "Weather.png",
	},
	{
		Name:        "Web Radio",
		Description: "Drink, chill and enjoy the good vibes.",
		Url:         "about:blank",
		IconUrl:     "WebRadio.png",
	},
	{
		Name:        "Music",
		Description: "Locally-stored offline music library.",
		Url:         "about:blank",
		IconUrl:     "Music.png",
	},
	{
		Name:        "SmartHome",
		Description: "Didn't you forget to turn off the lights?",
		Url:         "about:blank",
		IconUrl:     "SmartHome.png",
	},
	{
		Name:        "Notifications",
		Description: "Self-contained service for all types of notifications.",
		Url:         "about:blank",
		IconUrl:     "Notifications.png",
	},
	{
		Name:        "Messaging",
		Description: "Private, encrypted communication service.",
		Url:         "about:blank",
		IconUrl:     "Messaging.png",
	},
	{
		Name:        "To-Do Lists",
		Description: "Stuff probably you'll never do anyway...",
		Url:         "about:blank",
		IconUrl:     "ToDos.png",
	},
}
