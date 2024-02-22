import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    proxy: {
      '/api': 'http://localhost:5117'
    }
  },
  // build: {
  //   outDir: '../wwwroot'
  // },
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@components', replacement: '/src/components' },
      { find: '@pages', replacement: '/src/pages' }
    ],
  },
  plugins: [react()],
})
