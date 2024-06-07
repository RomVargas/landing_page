import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html', // o el punto de entrada principal de tu aplicación
        // Si tienes múltiples puntos de entrada, añádelos aquí
      },
      output: {
        // Opcionalmente, puedes ajustar la salida para organizar mejor los archivos
        dir: 'dist',
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
});
