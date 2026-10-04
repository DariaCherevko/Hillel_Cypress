import homePage from '../pages/HomePage';

describe('Check elements in the header and footer', () => {
    beforeEach(() => {
        homePage.open();
    });

    it('Header clickable elements count', () => {
        homePage.headerClickableElements.should('have.length', 6);
    });

    it('Header logo and navigation', () => {
        homePage.headerLogo.should('be.visible').and('have.attr', 'href', '/');
        homePage.homeLink.should('be.visible').and('have.attr', 'href', '/');
        homePage.aboutButton.should('be.visible');
        homePage.contactsButton.should('be.visible');
    });

    it('Header authentication buttons', () => {
        homePage.guestLoginButton.should('be.visible');
        homePage.signInButton.should('be.visible');
    });

    it('Footer links and buttons', () => {
        homePage.footerLinks.should('have.length', 1);
        homePage.footerLogo.should('be.visible').and('have.attr', 'href', '/');
        homePage.footerButtons.should('not.exist');
    });
});
