import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        entry: 'main.js',
        entry: './src/data.js',
      },
    },
    // assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg'],
    // assetsDir: 'images/items',
  },
})