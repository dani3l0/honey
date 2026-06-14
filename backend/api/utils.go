package api

import (
	"encoding/json"
	"errors"
	"honey/backend/config"
	"net/http"
)

func MethodNotAllowed(w http.ResponseWriter, r *http.Request, method string) bool {
	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
	} else if r.Method != method {
		WriteJSON(w, http.StatusMethodNotAllowed, "Method Not Allowed", "")
		return true
	}
	return false
}

// Helper function to write JSON error responses with proper formatting
func WriteJSON(w http.ResponseWriter, statusCode int, message string, data any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)

	response := map[string]any{
		"ok":      statusCode == http.StatusOK,
		"message": message,
	}
	if data != nil {
		response["data"] = data
	}

	json.NewEncoder(w).Encode(response)
}

func Auth(w http.ResponseWriter, r *http.Request) bool {
	user, errA := r.Cookie("user")
	pass, errB := r.Cookie("pass")
	if e := errors.Join(errA, errB); e != nil {
		WriteJSON(w, http.StatusUnauthorized, "Unauthorized", "")
		return false
	}
	authd := config.App.Admin.Name == user.Value && config.App.Admin.Password == pass.Value
	if !authd {
		WriteJSON(w, http.StatusUnauthorized, "Unauthorized", "")
	}
	return authd
}
