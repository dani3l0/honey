# honey

A sweet dashboard I use on my homeserver with some self-hosted stuff...

<img src="screenshot.jpg" style="width: 720px">


## 🚀 Installation

1. Download latest prebuilt archive from **[Releases](https://github.com/dani3l0/honey/releases)**.

2. Extract downloaded archive to your webserver root.

3. You're done!

**Note:** honey is written in **pure** `HTML` `CSS` `JS` so dynamic backend or special webserver configuration is not required.
It works out-of-the-box as all operations are done client-side.


## ⚙️ Configuration

Configuration file is located at `config/config.json`. It is pretty readable, so you shouldn't have trouble customizing it. Also, please don't remove any keys as it will break user interface.


### 📱 Tweaking the user interface

The following keys are available under `ui` section. Some of them are listed in _Settings_ page and can be overriden by end-user.

| Key name				| Description																																	| in Settings	|
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| `name`				| Name shown at the main screen and the tab title.																								|		❌		|
| `desc`				| Short description shown under title at the main screen.																						|		❌		|
| `icon`				| Icon shown at the main screen and as site's favicon.																							|		❌		|
| `wallpaper`			| Background image visible when dark mode is disabled.																							|		❌		|
| `wallpaper_dark`		| Background image visible when dark mode is enabled.																							|		❌		|
| `dark_mode`			| Tells whether dark mode is enabled by default.																								|		✅		|
| `open_new_tab`		| Tells whether clicking on a service will open it in new tab by default.																		|		✅		|
| `blur`				| Tells whether card background blur is enabled by default.																						|		✅		|
| `animations`			| Tells whether UI animations are enabled by default.																							|		✅		|
| `https_importance`	| How important is HTTPS comparing to independence. If set to `0.25`, HTTPS will score maximum 25% in Privacy Panel. Total importance is `1`.	|		✅		|


### 🔗 Adding custom services

`services` section is an array containing objects. Object's structure looks like this:

| Key name           | Description                                                                   |
|--------------------|-------------------------------------------------------------------------------|
| `name`             | Your service's name.                                                          |
| `desc`             | Short description shown under service's name.                                 |
| `href`             | HTTP address of your service. It is directly passed to `<a>` tag.             |
| `icon`             | Path to an icon of your service.                                              |



## 🛠️ Development

honey is built on top of [Vite.js](https://vitejs.dev/). This tool allows faster development and offers various optimizations.

How to prepare a development environment:

```
# Download the source code
git clone https://github.com/dani3l0/honey && cd honey

# Install required modules
npm i
```

### 🗼 Live server

**For coding.** This will spin up a HTTP server on **[localhost:5173](http://localhost:5173/)**. Each time source file is saved, UI will automatically hot-reload so there is no need for `ALT+TAB` and `F5`.

```
npm run dev
```


### 🏗️ Build

**Prepare project for production.** This command will link and optimize project assets to take less space and require less bandwith. Prebuilt assets will be stored in `dist` directory and are ready to be put in a webserver root.

```
npm run build
```

## 🤝 Credits

Of course, some third-party resources are used in this project. I kanged them for self-hosting, easier development and to avoid compatibility issues.

- **[Material Icons](https://github.com/materialos/android-icon-pack/)**, for app icons at _Services_ page

- **[Google Fonts](https://fonts.google.com/)**, for material icons on buttons and Quicksand font

- **honey icon** - random icon found in DuckDuckGo Images

- **Wallpapers** - very nice background images kanged from [wallhaven](https://wallhaven.cc/)
