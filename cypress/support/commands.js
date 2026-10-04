Cypress.Commands.add('visitWithAuth', (path = '/') => {
    cy.visit(path, {
        auth: {
            username: 'guest',
            password: 'welcome2qauto'
        }
    });
});
