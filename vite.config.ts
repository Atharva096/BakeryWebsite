import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // 💡 Change './' to the absolute path: '/YOUR_REPO_NAME/'
  base: '/BakeryWebsite/', 
})
