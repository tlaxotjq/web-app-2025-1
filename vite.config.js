import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/web-app-2025-1/',
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
})
