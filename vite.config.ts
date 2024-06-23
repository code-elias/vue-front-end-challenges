import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      external: [
        'fsevents', // Add any other modules you want to externalize
        'fs',
        'path',
        'module',
        'crypto',
        'tty',
        'util',
        'os',
        'events',
        'stream',
        'zlib',
        'http',
        'https',
        'url',
        'assert',
        'buffer',
        'querystring',
        'net',
        'tls',
        'child_process',
        'worker_threads',
        'perf_hooks',
        'readline',
        'dns'
      ]
    }
  }
})
