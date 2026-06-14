package api

import (
	"encoding/json"
	"net/http"
)

func MethodNotAllowed(w http.ResponseWriter, r *http.Request, method string) bool {
	if r.Method != method {
		WriteJSON(w, http.StatusMethodNotAllowed, "Method Not Allowed", "")
		return true
	} else if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return false
	}
	return false
}

// Helper function to write JSON error responses with proper formatting
func WriteJSON(w http.ResponseWriter, statusCode int, message string, data any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)

	response := map[string]any{
		"error":   true,
		"message": message,
	}
	if data != nil {
		response["data"] = data
	}

	json.NewEncoder(w).Encode(response)
}
