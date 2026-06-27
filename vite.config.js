import { dirname, resolve } from 'node:path'
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig({
	plugins: [svelte()],
	build: {
		outDir: "./backend/webserver/dist",
    emptyOutDir: true,
    rolldownOptions: {
      input: {
        app: resolve(import.meta.dirname, 'index.html'),
        admin: resolve(import.meta.dirname, 'admin.html'),
      },
    }
	},
	server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4208',
        changeOrigin: true,
        secure: false,
      },
      '/res': {
        target: 'http://localhost:4208',
        changeOrigin: true,
        secure: false,
      }
    }
  }
});
