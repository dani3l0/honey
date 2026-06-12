package config

type Config struct {
	ClientDefaults Client          `yaml:"client_defaults" json:"client_defaults"`
	DashboardItems []DashboardItem `yaml:"dashboard_items" json:"dashboard_items"`
	System         System          `yaml:"system" json:"system"`
}

var App = Config{
	ClientDefaults: clientDefaults,
	DashboardItems: dashboardItemsDefault,
	System:         systemDefaults,
}
