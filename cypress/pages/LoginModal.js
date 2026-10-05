class LoginModal {
    login(email, password) {
        this.emailInput.type(email);
        this.passwordInput.type(password, { log: false });
        this.loginButton.click();
    }

    loginAsUser() {
        cy.env(['USER_EMAIL', 'USER_PASSWORD']).then(({ USER_EMAIL, USER_PASSWORD }) => {
            this.login(USER_EMAIL, USER_PASSWORD);
        });
    }

    get emailInput() {
        return cy.get('#signinEmail');
    }

    get passwordInput() {
        return cy.get('#signinPassword');
    }

    get loginButton() {
        return cy.contains('.modal-content button', 'Login');
    }
}

export default new LoginModal();
