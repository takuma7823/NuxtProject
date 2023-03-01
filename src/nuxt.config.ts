// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader';
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', 'mdi/css/materialdesignicons.min.css', '~/assets/scss/reset.scss'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    plugins: [
      svgLoader({
        svgo: false,
      }),
    ],
    server: {
      proxy: {
        "/api": {
          target: 'https://maps.googleapis.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        }
      }
    }
  },
  buildModules: ['@nuxt/typescript-build'],
  runtimeConfig: {
    public: {
      apiKey: '',
      apiUrl: '',
    },
  },
});
