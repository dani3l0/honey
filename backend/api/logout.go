package api

import (
	"honey/backend/config"
	"net/http"
	"time"
)

func Logout(w http.ResponseWriter, r *http.Request) {
	if MethodNotAllowed(w, r, "GET") {
		return
	}

	// Set cookie
	http.SetCookie(w, &http.Cookie{
		Name:     "user",
		Value:    "",
		Path:     "/",
		HttpOnly: true,
		Expires:  time.Now().Add(-time.Minute),
		Secure:   false,
	})
	http.SetCookie(w, &http.Cookie{
		Name:     "pass",
		Value:    "",
		Path:     "/",
		HttpOnly: true,
		Expires:  time.Now().Add(-time.Minute),
		Secure:   false,
	})

	// OK
	WriteJSON(w, http.StatusOK, "OK", config.App.Admin)
}
