import { defineConfig } from 'vite';
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html', // o el punto de entrada principal de tu aplicación
        coming_soon: resolve(__dirname, 'src/pages/coming-soon.html'),
        learn_code: resolve(__dirname, 'src/pages/learn-code.html'),
        spring: resolve(__dirname, 'src/pages/spring.html'),
        threejs: resolve(__dirname, 'src/pages/threejs.html'),
        video_games: resolve(__dirname, 'src/pages/video-games.html'),
        python: resolve(__dirname, 'src/pages/python.html'),
        devops: resolve(__dirname, 'src/pages/devops.html'),
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
