import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server : {
    proxy : {
      "/todos" : "https://todoapp-sooty-eight.vercel.app"
    }
  },
  plugins: [react()],
})
