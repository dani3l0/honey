package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"path/filepath"
)

// Helper function to write JSON error responses with proper formatting
func writeErrorJSON(w http.ResponseWriter, statusCode int, message string, data any) {
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

// Helper function to write HTML error pages from custom templates
func handleHTMLError(statusCode int, w http.ResponseWriter) {
	htmlContent := ""

	switch statusCode {
	case 400:
		htmlContent = `<h1>400 Bad Request</h1>
			<p>The server could not understand the request due to invalid syntax.</p>`
	case 401:
		htmlContent = `<h1>401 Unauthorized</h1>
			<p>You are not authorized to access this resource.</p>`
	case 403:
		htmlContent = `<h1>403 Forbidden</h1>
			<p>You don't have permission to access this resource.</p>`
	case 404:
		htmlContent = `<h1>404 Not Found</h1>
			<p>The requested resource was not found on this server.</p>`
	case 500:
		htmlContent = `<h1>500 Internal Server Error</h1>
			<p>An unexpected error occurred on the server.</p>`
	}

	if htmlContent != "" {
		w.Write([]byte(htmlContent))
		return
	}

	fmt.Fprintf(w, "<h1>Error %d</h1>", statusCode)
}

// API GET endpoint
func handleAPIGET(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" && r.Method != "OPTIONS" {
		writeErrorJSON(w, 405, "Method Not Allowed", nil)
		return
	}

	w.Header().Set("Content-Type", "application/json")

	apiResponse := map[string]any{
		"message": "Hello from the GET API!",
		"path":    r.URL.Path,
		"data":    []string{"item1", "item2"},
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(apiResponse)
}

// API POST endpoint
func handleAPIPOST(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" && r.Method != "OPTIONS" {
		writeErrorJSON(w, 405, "Method Not Allowed", nil)
		return
	}

	var inputData map[string]any
	err := json.NewDecoder(r.Body).Decode(&inputData)

	if err != nil {
		fmt.Fprintf(os.Stderr, "[ERROR] Invalid JSON: %v\n", err)
		writeErrorJSON(w, 400, "Invalid JSON body - ensure you send valid JSON in the request body", nil)

		return
	}

	w.Header().Set("Content-Type", "application/json")
	apiResponse := map[string]any{
		"status": "received!",
		"path":   r.URL.Path,
		"body":   inputData,
	}

	json.NewEncoder(w).Encode(apiResponse)
}

func main() {
	fmt.Println("Starting Honey Web Server...")
	executableDir, _ := os.Getwd()
	staticRoot := filepath.Join(executableDir, "..", "dist")

	fsServer := http.FileServer(http.Dir(staticRoot))

	mux := http.NewServeMux()

	// Static file serving
	mux.Handle("/", fsServer)

	// APIs
	mux.HandleFunc("/api/get", handleAPIGET)
	mux.HandleFunc("/api/post", handleAPIPOST)

	// Message and spinup the server
	fmt.Println("")
	fmt.Printf("Static root: %s\n", staticRoot)
	http.ListenAndServe(":8080", mux)
}
