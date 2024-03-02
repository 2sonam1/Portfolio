import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'src/main.jsx', // adjust based on your entry file location
    },
    outDir: 'dist',
  },
  // base: "/Portfolio/"
})
