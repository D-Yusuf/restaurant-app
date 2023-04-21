import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        entry: 'main.js',
        data: '.src/data.js',
      }
    }
    
  }
})