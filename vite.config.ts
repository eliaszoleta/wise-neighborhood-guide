import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // homenexio.com is a custom domain (on GitHub Pages' deploy-pages action
  // and/or Vercel), and a custom domain always serves from the root on
  // either platform — the /wise-neighborhood-guide/ subpath only applies to
  // the unused *.github.io project-page URL, never to the real domain. Base
  // must stay root-relative regardless of which platform's env runs the
  // build, or asset/favicon URLs 404 on the live site.
  base: "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
