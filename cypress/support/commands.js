Cypress.Commands.add('visitWithAuth', (path = '/') => {
    cy.visit(path, {
        auth: {
            username: 'guest',
            password: 'welcome2qauto'
        }
    });
});

Cypress.Commands.add('createExpense', (expense) => {
    return cy.request('POST', '/api/expenses', expense);
});
