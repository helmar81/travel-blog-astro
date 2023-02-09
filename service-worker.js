import serviceWorker from 'astro-service-worker';

export default defineConfig({
  integrations: [
    serviceWorker({
      /** Provide custom service worker logic */
      swSrc: 'user-sw.js',

      /** 
       * Excludes specific pages from the service worker bundle, and forces them to always go to the network
       * This is useful for server-only specific code, for example database connections
       */
      networkOnly: ['/networkonly-astro'],

      /** Configure workbox options */
      workbox: {},

      /** Both default to true, useful if you want to provide a custom installation experience */
      skipWaiting: false,
      clientsClaim: false,

      /** Configure esbuild options */
      esbuild: {},

      /** Enables minifcation for esbuild, defaults to true */
      minify: false,

      /** Override the default service worker registration and update script */
      swScript: '',
    }),
  ]
});