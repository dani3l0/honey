package api

import (
	"encoding/json"
	"honey/backend/config"
	"net/http"
	"time"
)

func AuthEndpoint(w http.ResponseWriter, r *http.Request) {
	if MethodNotAllowed(w, r, "POST") {
		return
	}

	// If cookie-based auth fails, try to read POST data
	if !AuthPre(w, r, true) {
		// Parse JSON
		var data config.Admin
		err := json.NewDecoder(r.Body).Decode(&data)
		if err != nil {
			WriteJSON(w, http.StatusBadRequest, "Bad Request", "Malformed JSON input")
			return
		}
		authed := config.App.Admin.Name == data.Name && config.App.Admin.Password == config.SHA256(data.Password)

		// Unauthorized
		if !authed {
			WriteJSON(w, http.StatusUnauthorized, "Unauthorized", "")
			return
		}
	}

	// Set cookie
	http.SetCookie(w, &http.Cookie{
		Name:     "user",
		Value:    config.App.Admin.Name,
		Path:     "/",
		HttpOnly: true,
		Expires:  time.Now().Add(config.App.System.CookieLifetime),
		Secure:   false,
	})
	http.SetCookie(w, &http.Cookie{
		Name:     "pass",
		Value:    config.App.Admin.Password,
		Path:     "/",
		HttpOnly: true,
		Expires:  time.Now().Add(config.App.System.CookieLifetime),
		Secure:   false,
	})

	// OK
	WriteJSON(w, http.StatusOK, "OK", config.App.Admin)
}
