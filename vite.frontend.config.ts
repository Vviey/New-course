import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@components': path.resolve(__dirname, './client/src/components'),
      '@hooks': path.resolve(__dirname, './client/src/hooks'),
      '@lib': path.resolve(__dirname, './client/src/lib'),
      '@pages': path.resolve(__dirname, './client/src/pages'),
      '@styles': path.resolve(__dirname, './client/src/styles'),
      '@assets': path.resolve(__dirname, './attached_assets'),
      '@shared': path.resolve(__dirname, './shared'),
    },
  },
  server: {
    port: 5173,
    open: true,
    host: '0.0.0.0',
    watch: {
      usePolling: true
    },
  },
  // Special config for frontend-only mode
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'wouter',
      'framer-motion',
      'lucide-react',
    ],
  },
  // Configure main entry point for frontend-only mode
  root: path.resolve(__dirname, './client'),
  publicDir: path.resolve(__dirname, './public'),
  
  // Use the frontend-only-main.tsx as entry point
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, './client/src/frontend-only-main.tsx'),
      },
    },
  },
});