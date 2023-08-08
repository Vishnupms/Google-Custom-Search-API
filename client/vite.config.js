import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Set the port to 3000
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // Update this to the correct backend server address
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''), // Remove /api from the URL
      },
    },
  },
});
