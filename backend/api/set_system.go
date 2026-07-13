package api

import (
	"encoding/json"
	"honey/backend/config"
	"net/http"
)

func SetSystem(w http.ResponseWriter, r *http.Request) bool {
	if MethodNotAllowed(w, r, "POST") {
		return false
	}

	// Auth
	if !Auth(w, r) {
		return false
	}

	// Parse JSON
	var newConfig config.System
	err := json.NewDecoder(r.Body).Decode(&newConfig)
	if err != nil {
		WriteJSON(w, http.StatusBadRequest, "Bad Request", "Malformed JSON input")
		return false
	}

	// Override system configuration
	config.App.System = newConfig

	config.Sync()
	WriteJSON(w, http.StatusOK, "OK", config.App.System)
	return true
}
