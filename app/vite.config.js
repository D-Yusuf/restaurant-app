import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        entry: 'main.js',
      },
    },
    assetsDir: 'images/items',
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg'],
  },
})