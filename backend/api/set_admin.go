package api

import (
	"encoding/json"
	"honey/backend/config"
	"net/http"
	"time"
)

func SetAdmin(w http.ResponseWriter, r *http.Request) {
	if MethodNotAllowed(w, r, "POST") {
		return
	}

	// Auth
	if !Auth(w, r) {
		return
	}

	// Parse JSON
	var newConfig config.Admin
	err := json.NewDecoder(r.Body).Decode(&newConfig)
	if err != nil {
		WriteJSON(w, http.StatusBadRequest, "Bad Request", "Malformed JSON input")
		return
	}

	// Override user
	config.App.Admin.Name = newConfig.Name
	config.App.Admin.Password = config.SHA256(newConfig.Password)

	// Set cookie
	http.SetCookie(w, &http.Cookie{
		Name:     config.App.Admin.Name,
		Value:    config.App.Admin.Password,
		Path:     "/",
		HttpOnly: true,
		Expires:  time.Now().Add(config.App.System.CookieLifetime),
	})

	config.Sync()
	WriteJSON(w, http.StatusOK, "OK", config.App.Admin)
}
