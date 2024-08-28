import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/bautizo/",
  plugins: [
    react(),
    visualizer({ open: true, filename: "bundle-visualization.html" }),
    pluginPurgeCss()
  ]
});
