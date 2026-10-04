class HomePage {
    open() {
        cy.visitWithAuth();
    }

    get header() {
        return cy.get('header');
    }

    get headerClickableElements() {
        return this.header.find('button, a');
    }

    get headerLogo() {
        return this.header.find('.header_logo');
    }

    get homeLink() {
        return this.header.contains('a', 'Home');
    }

    get aboutButton() {
        return this.header.contains('button', 'About');
    }

    get contactsButton() {
        return this.header.contains('button', 'Contacts');
    }

    get guestLoginButton() {
        return this.header.contains('button', 'Guest log in');
    }

    get signInButton() {
        return this.header.contains('button', 'Sign In');
    }

    get footer() {
        return cy.get('footer');
    }

    get footerLinks() {
        return this.footer.find('a');
    }

    get footerButtons() {
        return this.footer.find('button');
    }

    get footerLogo() {
        return this.footer.find('.footer_logo');
    }
}

export default new HomePage();
