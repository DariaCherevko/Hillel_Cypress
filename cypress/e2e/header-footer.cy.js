describe('Check elements in the header and footer', () => {
    beforeEach(() => {
        cy.visitWithAuth();
    });

    it('Header clickable elements count', () => {
        cy.get('header').within(() => {
            cy.get('button, a').should('have.length', 6);
        });
    });

    it('Header logo and navigation', () => {
        cy.get('header').within(() => {
            cy.get('.header_logo').should('be.visible').and('have.attr', 'href', '/');
            cy.contains('a', 'Home').should('be.visible').and('have.attr', 'href', '/');
            cy.contains('button', 'About').should('be.visible');
            cy.contains('button', 'Contacts').should('be.visible');
        });
    });

    it('Header authentication buttons', () => {
        cy.get('header').within(() => {
            cy.contains('button', 'Guest log in').should('be.visible');
            cy.contains('button', 'Sign In').should('be.visible');
        });
    });

    it('Footer links and buttons', () => {
        cy.get('footer').within(() => {
            cy.get('a').should('have.length', 1);
            cy.get('.footer_logo').should('be.visible').and('have.attr', 'href', '/');
            cy.get('button').should('not.exist');
        });
    });
});
