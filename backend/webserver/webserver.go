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
	fmt.Println("Starting Honey Web Server...")

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

	// Message and spinup the server
	fmt.Println("Serving under ", config.App.System.ListenAddr)
	http.ListenAndServe(config.App.System.ListenAddr, Mux)
}
