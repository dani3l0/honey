package config

type Personalization struct {
	Favicon             string `yaml:"favicon" json:"favicon"`
	BackgroundImage     string `yaml:"background_image" json:"background_image"`
	BackgroundImageDark string `yaml:"background_image_dark" json:"background_image_dark"`
}

var personalizationDefaults = Personalization{
	Favicon:             "honey.png",
	BackgroundImage:     "wallhaven-4ogr3m.jpg",
	BackgroundImageDark: "wallhaven-6qqgk6.jpg",
}
