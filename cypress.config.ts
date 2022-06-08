import {defineConfig} from 'cypress';

export default defineConfig({
  env: {
    baseUrl: 'http://localhost:3001/',
    chromeWebSecurity: false,
    viewportWidth: 1400,
    viewportHeight: 800,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
