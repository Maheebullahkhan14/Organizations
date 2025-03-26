import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    assetsInclude: ["**/*.mp4"],
    base: process.env.VITE_BASE_PATH || '/Organizations',
  }
})
