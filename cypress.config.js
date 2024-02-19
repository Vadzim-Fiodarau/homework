const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl: 'http://localhost:4001',
  },
});


