const { defineConfig } = require('cypress');
const baseConfig = require('./cypress.config');

module.exports = defineConfig({
    ...baseConfig,
    e2e: {
        ...baseConfig.e2e,
        baseUrl: 'https://qauto2.forstudy.space/'
    },
    env: {
        USER_EMAIL: 'user.qauto2@test.com',
        USER_PASSWORD: 'Autotest_1234'
    }
});
