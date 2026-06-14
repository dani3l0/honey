package api

import (
	"encoding/json"
	"fmt"
	"honey/backend/config"
	"net/http"
	"time"
)

func AuthEndpoint(w http.ResponseWriter, r *http.Request) {
	if MethodNotAllowed(w, r, "POST") {
		return
	}

	// Parse JSON
	var data config.Admin
	err := json.NewDecoder(r.Body).Decode(&data)
	if err != nil {
		fmt.Println(err.Error())
		WriteJSON(w, http.StatusBadRequest, "Bad Request", "Malformed JSON input")
		return
	}
	authed := config.App.Admin.Name == data.Name && config.App.Admin.Password == config.SHA256(data.Password)

	if !authed {
		WriteJSON(w, http.StatusUnauthorized, "Unauthorized", "")
		return
	}

	// Set cookie
	http.SetCookie(w, &http.Cookie{
		Name:     config.App.Admin.Name,
		Value:    config.App.Admin.Password,
		Path:     "/",
		HttpOnly: true,
		Expires:  time.Now().Add(config.App.System.CookieLifetime),
	})

	WriteJSON(w, http.StatusOK, "OK", config.App.Admin)
}
