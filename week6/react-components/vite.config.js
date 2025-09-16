import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Import tailwind plugin
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
// Add the tailwindcss() plugin
