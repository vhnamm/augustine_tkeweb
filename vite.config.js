import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Define your aliases here
      "~": "/src", // Example: '@' maps to the 'src' directory
      "~components": "/src/components", // Example: '@components' maps to 'src/components'
      // Add more aliases as needed
    },
  },
});
