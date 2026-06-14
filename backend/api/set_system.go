package api

import (
	"encoding/json"
	"honey/backend/config"
	"net/http"
)

func SetSystem(w http.ResponseWriter, r *http.Request) {
	if MethodNotAllowed(w, r, "POST") {
		return
	}

	// Auth
	if !Auth(w, r) {
		return
	}

	// Parse JSON
	var newConfig config.System
	err := json.NewDecoder(r.Body).Decode(&newConfig)
	if err != nil {
		WriteJSON(w, http.StatusBadRequest, "Bad Request", "Malformed JSON input")
		return
	}

	// Override system configuration
	config.App.System = newConfig

	config.Sync()
	WriteJSON(w, http.StatusOK, "OK", config.App.System)
}
