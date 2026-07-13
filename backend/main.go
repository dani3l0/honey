package main

import (
	"fmt"
	"honey/backend/config"
	"honey/backend/webserver"
	"os"
	"time"
)

func main() {
	for {
		config.Load()
		err := webserver.Run()
		if err != nil {
			fmt.Println("Error running webserver: ", err.Error())
			os.Exit(1)
		}
		time.Sleep(time.Second)
	}
}
