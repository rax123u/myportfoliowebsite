import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    visualizer({
      open: false,
      gzipped: true,
    }),
  ],
  resolve: {
    alias: {
      'react-reconciler/constants': resolve(__dirname, 'node_modules/react-reconciler/constants.js'),
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'animations': ['gsap', 'framer-motion', 'lenis'],
          'three-core': ['three'],
          'three-fiber': ['@react-three/fiber', '@react-three/drei'],
          'redux': ['@reduxjs/toolkit', 'react-redux'],
        },
        chunkFileNames: 'chunks/[name]-[hash].js',
        entryFileNames: '[name]-[hash].js',
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    port: 3000,
    strictPort: false,
    open: true,
    hmr: {
      host: 'localhost',
      port: 3000,
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'gsap',
      'framer-motion',
      'lenis',
      'three',
      '@react-three/fiber',
      '@react-three/drei',
      'react-reconciler/constants'
    ],
    exclude: []
  },
})