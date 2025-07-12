const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://reqres.in', // from your variables.yml
    setupNodeEvents(on, config) {
      // add plugins if needed
    }
  }
});