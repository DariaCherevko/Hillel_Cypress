const { defineConfig } = require('cypress');
const baseConfig = require('./cypress.config');

module.exports = defineConfig({
    ...baseConfig,
    e2e: {
        ...baseConfig.e2e,
        baseUrl: 'https://qauto.forstudy.space/'
    },
    env: {
        USER_EMAIL: 'user.qauto1@test.com',
        USER_PASSWORD: 'Autotest_1234'
    }
});
