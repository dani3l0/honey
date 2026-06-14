package webserver

import (
	"embed"
	"fmt"
	"honey/backend/api"
	"honey/backend/config"
	"io/fs"
	"net/http"
	"os"
)

//go:embed all:dist
var distEmbed embed.FS

var Mux *http.ServeMux

func Run() {
	fmt.Println("Starting Honey Web Server ...")

	Mux = http.NewServeMux()

	// Static file serving
	staticFS, err := fs.Sub(distEmbed, "dist")
	if err != nil {
		fmt.Println("Fatal: cannot find embed 'dist' directory.")
		os.Exit(100)
	}
	fsServer := http.FileServer(http.FS(staticFS))
	Mux.Handle("/", fsServer)

	// API
	Mux.HandleFunc("/api/getConfig", api.GetConfig)
	Mux.HandleFunc("/api/setConfig", api.SetConfig)

	Mux.HandleFunc("/api/auth", api.AuthEndpoint)
	Mux.HandleFunc("/api/setAdmin", api.SetAdmin)

	Mux.HandleFunc("/api/getSystem", api.GetSystem)
	Mux.HandleFunc("/api/setSystem", api.SetSystem)

	// Message and spinup the server
	fmt.Printf("Serving under http://%s\n", config.App.System.ListenAddr)
	http.ListenAndServe(config.App.System.ListenAddr, Mux)
}
