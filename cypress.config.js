const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: "https://buger-eats-qa.vercel.app"
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/output.xml',
    toConsole: false
  }
});