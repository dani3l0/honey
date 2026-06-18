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

//go:embed all:res
var resEmbed embed.FS

// App Router
var Mux *http.ServeMux

func Run() {
	fmt.Println("Starting Honey Web Server ...")

	// Copy static files to host
	if _, err := os.Stat("./res"); os.IsNotExist(err) {
		fmt.Println("Copying example resource files to host ...")
		if err := os.CopyFS(".", resEmbed); err != nil {
			panic("Failed to copy static files: " + err.Error())
		}
		fmt.Println("Resource files copied successfully")
	} else {
		fmt.Println("Using host's resource directory")
	}

	Mux = http.NewServeMux()

	// Static file serving
	staticFS, err := fs.Sub(distEmbed, "dist")
	if err != nil {
		fmt.Println("Fatal: cannot find embed 'dist' directory.")
		os.Exit(100)
	}
	fsServer := http.FileServer(http.FS(staticFS))
	Mux.Handle("/", fsServer)

	// Resource Files
	resServer := http.FileServer(http.FS(resEmbed))
	Mux.Handle("/res/", resServer)

	// API
	Mux.HandleFunc("/api/getConfig", api.GetConfig)
	Mux.HandleFunc("/api/setConfig", api.SetConfig)

	Mux.HandleFunc("/api/auth", api.AuthEndpoint)
	Mux.HandleFunc("/api/setAdmin", api.SetAdmin)

	Mux.HandleFunc("/api/getSystem", api.GetSystem)
	Mux.HandleFunc("/api/setSystem", api.SetSystem)

	// Message and spinup the server
	fmt.Printf("Serving under http://%s\n", config.App.System.ListenAddr)
	http.ListenAndServe(config.App.System.ListenAddr, enableCORS(Mux))
}
