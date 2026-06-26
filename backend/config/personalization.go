package config

type Personalization struct {
	Name                string `yaml:"name" json:"name"`
	Description         string `yaml:"description" json:"description"`
	Favicon             string `yaml:"favicon" json:"favicon"`
	BackgroundImage     string `yaml:"background_image" json:"background_image"`
	BackgroundImageDark string `yaml:"background_image_dark" json:"background_image_dark"`
}

var personalizationDefaults = Personalization{
	Name:                "honey",
	Description:         "A sweet place for all your self-hosted services.",
	Favicon:             "honey.png",
	BackgroundImage:     "wallhaven-4ogr3m.jpg",
	BackgroundImageDark: "wallhaven-6qqgk6.jpg",
}
