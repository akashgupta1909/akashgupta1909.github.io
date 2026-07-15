import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User GitHub Pages site (akashgupta1909.github.io) is served from the domain root.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
