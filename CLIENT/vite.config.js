import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
     tailwindcss(),
     // Add any other plugins you need here

  ],
  server: {
    port: 3000, // Change this to your desired port
    host: '0.0.0.0', // Allows access from other devices on the network
  },

})
