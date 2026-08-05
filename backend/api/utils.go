package api

import (
	"encoding/json"
	"errors"
	"honey/backend/config"
	"net/http"
	"os"
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
	return AuthPre(w, r, false)
}
func AuthPre(w http.ResponseWriter, r *http.Request, lazy bool) bool {
	user, errA := r.Cookie("user")
	pass, errB := r.Cookie("pass")
	if e := errors.Join(errA, errB); e != nil {
		if !lazy {
			WriteJSON(w, http.StatusUnauthorized, "Unauthorized", "")
		}
		return false
	}
	authd := config.App.Admin.Name == user.Value && config.App.Admin.Password == pass.Value
	if !lazy && !authd {
		WriteJSON(w, http.StatusUnauthorized, "Unauthorized", "")
	}
	return authd
}

// Shared function for reading Background and Icon directories
func ReadResDir(target string) ([]string, error) {
	filesRaw, err := os.ReadDir(target)
	var files []string
	if err == nil {
		for _, file := range filesRaw {
			files = append(files, file.Name())
		}
	}
	return files, err
}
