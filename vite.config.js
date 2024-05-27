import { defineConfig } from "vite";
import { resolve } from 'path'

/**
 * @type {import("vite").UserConfig}
 */
export default defineConfig({
  appType: "mpa",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        demo: resolve(__dirname, 'demo/index.html'),
        "demo/nuevo-envio": resolve(__dirname, 'demo/nuevo-envio/index.html'),
      },
    },
  },
})