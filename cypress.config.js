const { defineConfig } = require('cypress');

module.exports = defineConfig({
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: 'cypress/reports',
        overwrite: false,
        html: true,
        json: true
    },
    e2e: {
        baseUrl: 'https://qauto.forstudy.space/',
        viewportWidth: 1920,
        viewportHeight: 1080,
        defaultCommandTimeout: 10000
    }
});
