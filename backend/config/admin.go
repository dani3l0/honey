package config

import (
	"crypto/sha256"
	"encoding/hex"
)

type Admin struct {
	Name     string `yaml:"name" json:"-"`
	Password string `yaml:"password" json:"-"`
}

var adminDefaults = Admin{
	Name:     "admin",
	Password: SHA256("admin"),
}

func SHA256(s string) string {
	bytes := sha256.Sum256([]byte(s))
	return hex.EncodeToString(bytes[:])
}
