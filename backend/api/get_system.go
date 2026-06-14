package api

import (
	"honey/backend/config"
	"net/http"
)

func GetSystem(w http.ResponseWriter, r *http.Request) {
	if MethodNotAllowed(w, r, "GET") {
		return
	}

	// Auth
	if !Auth(w, r) {
		return
	}

	WriteJSON(w, http.StatusOK, "OK", config.App.System)
}
