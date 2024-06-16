import { defineConfig } from 'vite';
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html', // o el punto de entrada principal de tu aplicación
        coming_soon: resolve(__dirname, 'src/pages/coming-soon.html'),
      },
      output: {
        // Opcionalmente, puedes ajustar la salida para organizar mejor los archivos
        dir: 'dist',
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    }
  },
});
