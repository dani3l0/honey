package webserver

import (
	"context"
	"fmt"
	"honey/backend/api"
	"net/http"
	"time"
)

// Save config and restart webserver
func SaveAndRestart(w http.ResponseWriter, r *http.Request) {
	if !api.SetSystem(w, r) {
		return
	}
	fmt.Println("Saving system config and restarting webserver ...")
	go func() {
		ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
		defer cancel()
		if err := Server.Shutdown(ctx); err != nil {
			fmt.Println("Error while closing server:", err.Error())
		}
	}()
}
