import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@',  replacement: '/src' },
      { find: '@ds', replacement: '/src/design-system' },
    ],
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:7236',
        changeOrigin: true,
      },
    },
  },
})
