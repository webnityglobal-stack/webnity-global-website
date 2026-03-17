import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: [
      '0368-2409-40d2-100e-e51-85fb-ce22-a569-4f15.ngrok-free.app',
      // Or allow all hosts (for development only!)
      'all'
    ]
  }
})
