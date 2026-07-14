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
	config.Sync()

	// Set cookie
	http.SetCookie(w, &http.Cookie{
		Name:     "user",
		Value:    config.App.Admin.Name,
		Path:     "/",
		HttpOnly: true,
		Expires:  time.Now().Add(config.App.System.CookieLifetime),
	})
	http.SetCookie(w, &http.Cookie{
		Name:     "pass",
		Value:    config.App.Admin.Password,
		Path:     "/",
		HttpOnly: true,
		Expires:  time.Now().Add(config.App.System.CookieLifetime),
	})

	// Response
	WriteJSON(w, http.StatusOK, "OK", config.App.Admin)
}
