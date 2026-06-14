package config

import "path"

type Personalization struct {
	Favicon             string `yaml:"favicon" json:"favicon"`
	BackgroundImage     string `yaml:"background_image" json:"background_image"`
	BackgroundImageDark string `yaml:"background_image_dark" json:"background_image_dark"`
}

var personalizationDefaults = Personalization{
	Favicon:             path.Join(systemDefaults.StaticIconsDir, "favicon.png"),
	BackgroundImage:     path.Join(systemDefaults.StaticBackgroundsDir, "background-light.png"),
	BackgroundImageDark: path.Join(systemDefaults.StaticBackgroundsDir, "background-dark.png"),
}
