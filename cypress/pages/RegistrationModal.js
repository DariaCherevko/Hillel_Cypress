class RegistrationModal {
    fillForm(name, lastName, email, password, repeatPassword) {
        this.nameInput.type(name);
        this.lastNameInput.type(lastName);
        this.emailInput.type(email);
        this.passwordInput.type(password, { sensitive: true });
        this.repeatPasswordInput.type(repeatPassword, { sensitive: true });
    }

    signUp(name, lastName, email, password, repeatPassword) {
        this.fillForm(name, lastName, email, password, repeatPassword);
        this.registerButton.click();
    }

    get title() {
        return cy.get('.modal-title');
    }

    get nameInput() {
        return cy.get('#signupName');
    }

    get lastNameInput() {
        return cy.get('#signupLastName');
    }

    get emailInput() {
        return cy.get('#signupEmail');
    }

    get passwordInput() {
        return cy.get('#signupPassword');
    }

    get repeatPasswordInput() {
        return cy.get('#signupRepeatPassword');
    }

    get nameError() {
        return this.nameInput.siblings('.invalid-feedback');
    }

    get lastNameError() {
        return this.lastNameInput.siblings('.invalid-feedback');
    }

    get emailError() {
        return this.emailInput.siblings('.invalid-feedback');
    }

    get passwordError() {
        return this.passwordInput.siblings('.invalid-feedback');
    }

    get repeatPasswordError() {
        return this.repeatPasswordInput.siblings('.invalid-feedback');
    }

    get registerButton() {
        return cy.contains('.modal-content button', 'Register');
    }
}

export default new RegistrationModal();
