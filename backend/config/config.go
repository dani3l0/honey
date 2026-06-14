package config

type Config struct {
	Client          Client          `yaml:"client" json:"client"`
	DashboardItems  []DashboardItem `yaml:"dashboard_items" json:"dashboard_items"`
	Personalization Personalization `yaml:"personalization" json:"personalization"`
	System          System          `yaml:"system" json:"-"`
	Admin           Admin           `yaml:"admin" json:"-"`
}

var App = Config{
	Client:          clientDefaults,
	DashboardItems:  dashboardItemsDefaults,
	Personalization: personalizationDefaults,
	System:          systemDefaults,
}
