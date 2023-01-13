import { resolve } from "pathe";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "~": resolve("./src"),
    },
  },
  test: {
    include: ["src/**/*.{test,spec}.ts"],
    globals: true,
  },
});
