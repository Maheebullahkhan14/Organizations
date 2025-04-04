import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    assetsInclude: ["**/*.mp4"],
    base: mode === 'production' ? '/Maheebullahkhan14/Organizations/' : '/',
  }
})
