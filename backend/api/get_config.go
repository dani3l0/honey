package api

import (
	"honey/backend/config"
	"net/http"
)

func GetConfig(w http.ResponseWriter, r *http.Request) {
	if MethodNotAllowed(w, r, "GET") {
		return
	}
	WriteJSON(w, http.StatusOK, "OK", config.App)
}
