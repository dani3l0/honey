package api

import (
	"honey/backend/config"
	"net/http"
)

func ListBackgrounds(w http.ResponseWriter, r *http.Request) {
	if MethodNotAllowed(w, r, "GET") {
		return
	}

	// Auth
	if !Auth(w, r) {
		return
	}

	// List files and send response
	files, err := ReadResDir(config.App.System.StaticBackgroundsDir)
	if err != nil {
		WriteJSON(w, http.StatusInternalServerError, "Internal error", err.Error())
	} else {
		WriteJSON(w, http.StatusOK, "OK", files)
	}
}
