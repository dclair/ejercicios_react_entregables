import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    headers: {
      "Content-Security-Policy": "default-src 'self'; img-src 'self' data: https:;"
    }
  }
});
