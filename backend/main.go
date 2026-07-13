package main

import (
	"honey/backend/config"
	"honey/backend/webserver"
	"time"
)

func main() {
	for {
		config.Load()
		webserver.Run()
		time.Sleep(time.Second)
	}
}
