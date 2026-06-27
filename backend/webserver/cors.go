package webserver

import "net/http"

func enableCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// CORS origin to '*' (the smarter way)
		origin := r.Header.Get("Origin")
		if origin != "" {
			w.Header().Set("Access-Control-Allow-Origin", origin)
		}

		// Allow browser to set cookies received from server
		w.Header().Set("Access-Control-Allow-Credentials", "true")

		// Other standard headers
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		// Handle OPTIONS preflight immediately and return
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusNoContent)
			return
		}

		// Continue
		next.ServeHTTP(w, r)
	})
}
