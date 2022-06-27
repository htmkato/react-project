import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import babel from "vite-plugin-babel";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), babel()],
  resolve: {
    alias: {
      "@atoms": resolve(__dirname, "./src/components/atoms"),
      "@molecules": resolve(__dirname, "./src/components/molecules"),
      "@organisms": resolve(__dirname, "./src/components/organisms"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@util": resolve(__dirname, "./src/util"),
    },
  },
});
