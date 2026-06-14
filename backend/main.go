package main

import (
	"honey/backend/config"
	"honey/backend/webserver"
)

func main() {
	config.Load()
	webserver.Run()
}
