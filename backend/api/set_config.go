package api

import (
	"encoding/json"
	"honey/backend/config"
	"net/http"
)

func SetConfig(w http.ResponseWriter, r *http.Request) {
	if MethodNotAllowed(w, r, "POST") {
		return
	}

	// Auth
	if !Auth(w, r) {
		return
	}

	// Parse JSON
	var newConfig config.Config
	err := json.NewDecoder(r.Body).Decode(&newConfig)
	if err != nil {
		WriteJSON(w, http.StatusBadRequest, "Bad Request", "Malformed JSON input")
		return
	}

	// Override config, except hidden settings
	newConfig.Admin = config.App.Admin
	newConfig.System = config.App.System
	config.App = newConfig

	config.Sync()
	WriteJSON(w, http.StatusOK, "OK", config.App)
}
