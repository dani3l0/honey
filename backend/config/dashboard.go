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
		Name:        "Web Search",
		Description: "Open Goolag and search da internet!",
		Url:         "about:blank",
		IconUrl:     "WebSearch.png",
		PingDot:     false,
	},
	{
		Name:        "AI",
		Description: "Pure intelligence, now on your machine.",
		Url:         "about:blank",
		IconUrl:     "AI.png",
		PingDot:     false,
	},
	{
		Name:        "System Monitor",
		Description: "Monitoring of hardware resource use.",
		Url:         "about:blank",
		IconUrl:     "SystemMonitor.png",
		PingDot:     false,
	},
	{
		Name:        "System Settings",
		Description: "AIO self-hosted server management suite.",
		Url:         "about:blank",
		IconUrl:     "Settings.png",
		PingDot:     false,
	},
	{
		Name:        "Speed Test",
		Description: "Network speed test utility, JS-free!",
		Url:         "about:blank",
		IconUrl:     "SpeedTest.png",
		PingDot:     false,
	},
	{
		Name:        "Weather",
		Description: "Check whether you need an umbrella today.",
		Url:         "about:blank",
		IconUrl:     "Weather.png",
		PingDot:     false,
	},
	{
		Name:        "Web Radio",
		Description: "Drink, chill and enjoy the good vibes.",
		Url:         "about:blank",
		IconUrl:     "WebRadio.png",
		PingDot:     false,
	},
	{
		Name:        "Music",
		Description: "Locally-stored offline music library.",
		Url:         "about:blank",
		IconUrl:     "Music.png",
		PingDot:     false,
	},
	{
		Name:        "SmartHome",
		Description: "Didn't you forget to turn off the lights?",
		Url:         "about:blank",
		IconUrl:     "SmartHome.png",
		PingDot:     false,
	},
	{
		Name:        "Notifications",
		Description: "Self-contained service for all types of notifications.",
		Url:         "about:blank",
		IconUrl:     "Notifications.png",
		PingDot:     false,
	},
	{
		Name:        "Messaging",
		Description: "Private, encrypted communication service.",
		Url:         "about:blank",
		IconUrl:     "Messaging.png",
		PingDot:     false,
	},
	{
		Name:        "To-Do Lists",
		Description: "Stuff probably you'll never do anyway...",
		Url:         "about:blank",
		IconUrl:     "ToDos.png",
		PingDot:     false,
	},
}
