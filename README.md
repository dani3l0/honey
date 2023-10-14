# honey

A sweet dashboard hosted on my homeserver with some self-hosted stuff...

<img src="screenshot.jpg" style="width: 720px">


## Installation

It's extremely easy. honey is built in mind of simplicity.

1. Please **go to [Releases](https://github.com/dani3l0/honey/releases) and download latest archive** with prebuilt assets (not the source code).

2. Extract downloaded archive to your webserver root.

3. You're done!

4. Also, don't forget about [configuration](#configuration)!

**Note:** honey is written in **pure** `HTML` `CSS` `JS` so dynamic backend or special webserver configuration is not required. All operations are done client-side.


## Configuration

Configuration file is located at `config/config.json`. It is pretty readable, so you shouldn't have trouble customizing it.


### Tweaking the user interface

The following keys are available under `ui` section. Some of them are listed in _Settings_ page and can be overriden by end-user.

| Key name				| Description																			| in Settings	|
|-----------------------|---------------------------------------------------------------------------------------|---------------|
| `name`				| Name shown at the main screen and the tab title.										|		❌		|
| `desc`				| Short description shown under title at the main screen.								|		❌		|
| `icon`				| Icon shown at the main screen and as site's favicon.									|		❌		|
| `wallpaper`			| Background image visible when dark mode is disabled.									|		❌		|
| `wallpaper_dark`		| Background image visible when dark mode is enabled.									|		❌		|
| `dark_mode`			| Tells whether dark mode is enabled by default.										|		✅		|
| `open_new_tab`		| Tells whether clicking on a service will open it in new tab by default.				|		✅		|
| `blur`				| Tells whether card background blur is enabled by default.								|		✅		|
| `animations`			| Tells whether UI animations are enabled by default.									|		✅		|


### Adding custom services

`services` section is an array containing objects.

| Key name           | Description                                                                   |
|--------------------|-------------------------------------------------------------------------------|
| `name`             | Your service's name.                                                          |
| `desc`             | Short description shown under service's name.                                 |
| `href`             | HTTP address of your service. It is directly passed to `<a>` tag.             |
| `icon`             | Path to an icon of your service.                                              |



## Development

honey is built on top of [Vite.js](https://vitejs.dev/). This tool allows for faster development and offers various code optimizations.

Before proceeding, make sure you have all the requirements installed:

```
npm i
```

### Live server

This will spin up a HTTP server on [localhost:5173](http://localhost:5173/) and after each file write, UI will be automatically reloaded so there is no need to `ALT`+`TAB` to check the results.

```
npm run dev
```


### Build

This command will link and optimize project assets to take less space and require less bandwith. Optimized assets will be stored in `dist` directory.

```
npm run build
```
