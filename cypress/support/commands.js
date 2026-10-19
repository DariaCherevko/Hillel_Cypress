import homePage from '../pages/HomePage';
import loginModal from '../pages/LoginModal';

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
        options.log = false;
        Cypress.log({
            $el: element,
            name: 'type',
            message: '*'.repeat(text.length)
        });
    }

    return originalFn(element, text, options);
});

Cypress.Commands.add('visitWithAuth', (path = '/') => {
    cy.visit(path, {
        auth: {
            username: 'guest',
            password: 'welcome2qauto'
        }
    });
});

Cypress.Commands.add('login', (email, password) => {
    homePage.open();
    homePage.openSignInModal();
    loginModal.login(email, password);
});

Cypress.Commands.add('createExpense', (expense) => {
    return cy.request('POST', '/api/expenses', expense);
});
