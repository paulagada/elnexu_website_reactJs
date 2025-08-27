import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  base: '/elnexu_website_reactJs/',
  resolve: {
    alias: [{find: '@', replacement: path.resolve(__dirname, 'src')}]
  }
})
