import { defineConfig } from 'vite'
import ReactRefresh from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ReactRefresh()],
  build: {
    outDir: 'dist',
  },
  base: "/Portfolio/"
})
