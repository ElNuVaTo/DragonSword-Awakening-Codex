import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

export default defineConfig({
  base: "/DragonSword-Awakening-Codex/",

  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: true,
  },

  plugins: [react(), tailwindcss(), babel({ presets: [reactCompilerPreset()] })],
});
