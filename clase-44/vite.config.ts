import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});

// export default defineConfig({
//   plugins: [react()],
//   base: /nombre-repo/
// })

//gh-pages - paquete para hacer deploy a github pages
