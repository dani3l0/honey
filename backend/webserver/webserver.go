package webserver

import (
	"embed"
	"errors"
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

// App Router and server
var Mux *http.ServeMux
var Server *http.Server

func Run() error {
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

	// Copy resource files to host
	if _, err := os.Stat("./res"); os.IsNotExist(err) {
		fmt.Println("Copying example resource files to host ...")
		if err := os.CopyFS(".", resEmbed); err != nil {
			panic("Failed to copy static files: " + err.Error())
		}
		fmt.Println("Resource files copied successfully")
	}

	// Resource Files (Icons)
	resServer := http.FileServer(http.Dir(config.App.System.StaticIconsDir))
	Mux.Handle("/res/icons/", http.StripPrefix("/res/icons/", resServer))

	// Resource Files (Backgrounds)
	backServer := http.FileServer(http.Dir(config.App.System.StaticBackgroundsDir))
	Mux.Handle("/res/backgrounds/", http.StripPrefix("/res/backgrounds/", backServer))

	// API
	// App endpoint
	Mux.HandleFunc("/api/config", api.GetConfig)

	// Admin endpoints
	Mux.HandleFunc("/api/admin/setConfig", api.SetConfig)

	Mux.HandleFunc("/api/admin/auth", api.AuthEndpoint)
	Mux.HandleFunc("/api/admin/setAdmin", api.SetAdmin)

	Mux.HandleFunc("/api/admin/getSystem", api.GetSystem)
	Mux.HandleFunc("/api/admin/setSystem", SaveAndRestart)

	// Message, config and spinup the server
	fmt.Printf("Serving under http://%s\n", config.App.System.ListenAddr)
	Server = &http.Server{
		Addr:    config.App.System.ListenAddr,
		Handler: enableCORS(Mux),
	}
	err = Server.ListenAndServe()
	if err != nil && !errors.Is(err, http.ErrServerClosed) {
		return err
	}
	return nil
}
