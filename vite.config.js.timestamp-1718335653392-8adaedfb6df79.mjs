// vite.config.js
import { defineConfig } from "file:///Volumes/SSDRom-Data/Tailwind-CSS/landing_page/node_modules/vite/dist/node/index.js";
import { createHtmlPlugin } from "file:///Volumes/SSDRom-Data/Tailwind-CSS/landing_page/node_modules/vite-plugin-html/dist/index.mjs";
var vite_config_default = defineConfig({
  /*build: {
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
      },*/
  plugins: [
    createHtmlPlugin({
      minify: true,
      pages: {
        index: "index.html",
        about: "src/pages/devops.html",
        contact: "src/pages/python.html",
        coming_soon: "src/pages/coming-soon.html"
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVm9sdW1lcy9TU0RSb20tRGF0YS9UYWlsd2luZC1DU1MvbGFuZGluZ19wYWdlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVm9sdW1lcy9TU0RSb20tRGF0YS9UYWlsd2luZC1DU1MvbGFuZGluZ19wYWdlL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Wb2x1bWVzL1NTRFJvbS1EYXRhL1RhaWx3aW5kLUNTUy9sYW5kaW5nX3BhZ2Uvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IGNyZWF0ZUh0bWxQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1odG1sJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgLypidWlsZDoge1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIG1haW46ICdpbmRleC5odG1sJywgLy8gbyBlbCBwdW50byBkZSBlbnRyYWRhIHByaW5jaXBhbCBkZSB0dSBhcGxpY2FjaVx1MDBGM25cbiAgICAgICAgLy8gU2kgdGllbmVzIG1cdTAwRkFsdGlwbGVzIHB1bnRvcyBkZSBlbnRyYWRhLCBhXHUwMEYxXHUwMEUxZGVsb3MgYXF1XHUwMEVEXG4gICAgICB9LFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIC8vIE9wY2lvbmFsbWVudGUsIHB1ZWRlcyBhanVzdGFyIGxhIHNhbGlkYSBwYXJhIG9yZ2FuaXphciBtZWpvciBsb3MgYXJjaGl2b3NcbiAgICAgICAgZGlyOiAnZGlzdCcsXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnW25hbWVdLmpzJyxcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdjaHVua3MvW25hbWVdLVtoYXNoXS5qcycsXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAnYXNzZXRzL1tuYW1lXS1baGFzaF0uW2V4dF0nLFxuICAgICAgfSwqL1xuICAgICAgcGx1Z2luczogW1xuICAgICAgICBjcmVhdGVIdG1sUGx1Z2luKHtcbiAgICAgICAgICBtaW5pZnk6IHRydWUsXG4gICAgICAgICAgcGFnZXM6IHtcbiAgICAgICAgICAgIGluZGV4OiAnaW5kZXguaHRtbCcsXG4gICAgICAgICAgICBhYm91dDogJ3NyYy9wYWdlcy9kZXZvcHMuaHRtbCcsXG4gICAgICAgICAgICBjb250YWN0OiAnc3JjL3BhZ2VzL3B5dGhvbi5odG1sJyxcbiAgICAgICAgICAgIGNvbWluZ19zb29uOiAnc3JjL3BhZ2VzL2NvbWluZy1zb29uLmh0bWwnXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXVxuICAgIH0pO1xuIC8vIH0sXG4vL30pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0VCxTQUFTLG9CQUFvQjtBQUN6VixTQUFTLHdCQUF3QjtBQUVqQyxJQUFPLHNCQUFRLGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBY3RCLFNBQVM7QUFBQSxJQUNQLGlCQUFpQjtBQUFBLE1BQ2YsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLFFBQ0wsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsU0FBUztBQUFBLFFBQ1QsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
