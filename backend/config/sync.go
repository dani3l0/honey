package config

import (
	"errors"
	"fmt"
	"os"

	"gopkg.in/yaml.v3"
)

var FILENAME = "config.yaml"

func Sync() error {
	data, err := yaml.Marshal(&App)
	if err != nil {
		return err
	}
	err = os.WriteFile(FILENAME, data, 0644)
	if err != nil {
		fmt.Printf("Error: Couldn't sync config to disk: %+x\n", err)
		return err
	}
	return nil
}

func Load() error {
	_, err := os.Stat(FILENAME)
	if err != nil {
		if errors.Is(err, os.ErrNotExist) {
			Sync()
			fmt.Println("Config file does not exist, creating `" + FILENAME + "` ...")
			return nil
		}
		fmt.Printf("Failed to check config file status: %+x\n", err)
		return err
	} else {
		fmt.Println("Loaded `" + FILENAME + "` configuration file")
	}

	data, err := os.ReadFile(FILENAME)
	if err != nil {
		fmt.Printf("Failed to read YAML file: %+x\n", err)
		return err
	}

	err = yaml.Unmarshal(data, &App)
	if err != nil {
		fmt.Printf("Failed to parse YAML data: %+x\n", err)
		return err
	}

	return nil
}
