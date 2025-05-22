import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          simulations: [
            // Group simulation components together
            '/src/components/simulations/BarterWebChallenge.tsx',
            '/src/components/simulations/TimelineChallenge.tsx',
            '/src/components/simulations/InflationSimulator.tsx',
            '/src/components/simulations/QuizChallenge.tsx',
            '/src/components/simulations/TradeRouteMap.tsx',
            '/src/components/simulations/ReflectionExercise.tsx',
            // Add other simulation components as needed
          ],
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@assets': path.resolve(__dirname, './attached_assets'),
      '@shared': path.resolve(__dirname, './shared'),
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'wouter',
      'chart.js',
      'recharts',
      'react-markdown',
    ],
  },
});