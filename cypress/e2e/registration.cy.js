import registrationModal from '../pages/RegistrationModal';
import homePage from '../pages/HomePage';

const RED = 'rgb(220, 53, 69)';
const PASSWORD_ERROR =
    'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter';

describe('Registration', () => {
    beforeEach(() => {
        homePage.open();
        homePage.openRegistrationModal();
    });

    it('Modal has title "Registration"', () => {
        registrationModal.title.should('have.text', 'Registration');
    });

    describe('Name', () => {
        it('Empty Name shows "Name is required"', () => {
            registrationModal.nameInput.focus().blur();
            registrationModal.nameError.should('have.text', 'Name is required');
            registrationModal.nameInput.should('have.css', 'border-color', RED);
        });

        it('Name with cyrillic shows "Name is invalid"', () => {
            registrationModal.nameInput.type('Іван').blur();
            registrationModal.nameError.should('have.text', 'Name is invalid');
            registrationModal.nameInput.should('have.css', 'border-color', RED);
        });

        it('Name with digit shows "Name is invalid"', () => {
            registrationModal.nameInput.type('John1').blur();
            registrationModal.nameError.should('have.text', 'Name is invalid');
            registrationModal.nameInput.should('have.css', 'border-color', RED);
        });

        it('Name with special symbol shows "Name is invalid"', () => {
            registrationModal.nameInput.type('J@hn').blur();
            registrationModal.nameError.should('have.text', 'Name is invalid');
            registrationModal.nameInput.should('have.css', 'border-color', RED);
        });

        it('Name with 1 char shows length error', () => {
            registrationModal.nameInput.type('J').blur();
            registrationModal.nameError.should('have.text', 'Name has to be from 2 to 20 characters long');
            registrationModal.nameInput.should('have.css', 'border-color', RED);
        });

        it('Name with 21 chars shows length error', () => {
            registrationModal.nameInput.type('Abcdefghijklmnopqrstu').blur();
            registrationModal.nameError.should('have.text', 'Name has to be from 2 to 20 characters long');
            registrationModal.nameInput.should('have.css', 'border-color', RED);
        });

        it('Name with 1 char after trim shows length error', () => {
            registrationModal.nameInput.type('  J  ').blur();
            registrationModal.nameError.should('have.text', 'Name has to be from 2 to 20 characters long');
            registrationModal.nameInput.should('have.css', 'border-color', RED);
        });

        it('Name with 2 chars is valid', () => {
            registrationModal.nameInput.type('Jo').blur();
            registrationModal.nameError.should('not.exist');
            registrationModal.nameInput.should('not.have.css', 'border-color', RED);
        });

        it('Name with 20 chars is valid', () => {
            registrationModal.nameInput.type('Abcdefghijklmnopqrst').blur();
            registrationModal.nameError.should('not.exist');
            registrationModal.nameInput.should('not.have.css', 'border-color', RED);
        });

        it('Name with spaces around is valid', () => {
            registrationModal.nameInput.type('  Jo  ').blur();
            registrationModal.nameError.should('not.exist');
            registrationModal.nameInput.should('not.have.css', 'border-color', RED);
        });
    });

    describe('Last name', () => {
        it('Empty Last name shows "Last name is required"', () => {
            registrationModal.lastNameInput.focus().blur();
            registrationModal.lastNameError.should('have.text', 'Last name is required');
            registrationModal.lastNameInput.should('have.css', 'border-color', RED);
        });

        it('Last name with cyrillic shows "Last name is invalid"', () => {
            registrationModal.lastNameInput.type('Іванов').blur();
            registrationModal.lastNameError.should('have.text', 'Last name is invalid');
            registrationModal.lastNameInput.should('have.css', 'border-color', RED);
        });

        it('Last name with digit shows "Last name is invalid"', () => {
            registrationModal.lastNameInput.type('Smith1').blur();
            registrationModal.lastNameError.should('have.text', 'Last name is invalid');
            registrationModal.lastNameInput.should('have.css', 'border-color', RED);
        });

        it('Last name with special symbol shows "Last name is invalid"', () => {
            registrationModal.lastNameInput.type('Sm@th').blur();
            registrationModal.lastNameError.should('have.text', 'Last name is invalid');
            registrationModal.lastNameInput.should('have.css', 'border-color', RED);
        });

        it('Last name with 1 char shows length error', () => {
            registrationModal.lastNameInput.type('S').blur();
            registrationModal.lastNameError.should('have.text', 'Last name has to be from 2 to 20 characters long');
            registrationModal.lastNameInput.should('have.css', 'border-color', RED);
        });

        it('Last name with 21 chars shows length error', () => {
            registrationModal.lastNameInput.type('Abcdefghijklmnopqrstu').blur();
            registrationModal.lastNameError.should('have.text', 'Last name has to be from 2 to 20 characters long');
            registrationModal.lastNameInput.should('have.css', 'border-color', RED);
        });

        it('Last name with 1 char after trim shows length error', () => {
            registrationModal.lastNameInput.type('  S  ').blur();
            registrationModal.lastNameError.should('have.text', 'Last name has to be from 2 to 20 characters long');
            registrationModal.lastNameInput.should('have.css', 'border-color', RED);
        });

        it('Last name with 2 chars is valid', () => {
            registrationModal.lastNameInput.type('Sm').blur();
            registrationModal.lastNameError.should('not.exist');
            registrationModal.lastNameInput.should('not.have.css', 'border-color', RED);
        });

        it('Last name with 20 chars is valid', () => {
            registrationModal.lastNameInput.type('Abcdefghijklmnopqrst').blur();
            registrationModal.lastNameError.should('not.exist');
            registrationModal.lastNameInput.should('not.have.css', 'border-color', RED);
        });

        it('Last name with spaces around is valid', () => {
            registrationModal.lastNameInput.type('  Sm  ').blur();
            registrationModal.lastNameError.should('not.exist');
            registrationModal.lastNameInput.should('not.have.css', 'border-color', RED);
        });
    });

    describe('Email', () => {
        it('Empty Email shows "Email required"', () => {
            registrationModal.emailInput.focus().blur();
            registrationModal.emailError.should('have.text', 'Email required');
            registrationModal.emailInput.should('have.css', 'border-color', RED);
        });

        it('Email without @ shows "Email is incorrect"', () => {
            registrationModal.emailInput.type('test').blur();
            registrationModal.emailError.should('have.text', 'Email is incorrect');
            registrationModal.emailInput.should('have.css', 'border-color', RED);
        });

        it('Email without domain shows "Email is incorrect"', () => {
            registrationModal.emailInput.type('test@').blur();
            registrationModal.emailError.should('have.text', 'Email is incorrect');
            registrationModal.emailInput.should('have.css', 'border-color', RED);
        });

        it('Email without zone shows "Email is incorrect"', () => {
            registrationModal.emailInput.type('test@mail').blur();
            registrationModal.emailError.should('have.text', 'Email is incorrect');
            registrationModal.emailInput.should('have.css', 'border-color', RED);
        });

        it('Email without local part shows "Email is incorrect"', () => {
            registrationModal.emailInput.type('@mail.com').blur();
            registrationModal.emailError.should('have.text', 'Email is incorrect');
            registrationModal.emailInput.should('have.css', 'border-color', RED);
        });

        it('Valid Email has no error', () => {
            registrationModal.emailInput.type('test@mail.com').blur();
            registrationModal.emailError.should('not.exist');
            registrationModal.emailInput.should('not.have.css', 'border-color', RED);
        });
    });

    describe('Password', () => {
        it('Empty Password shows "Password required"', () => {
            registrationModal.passwordInput.focus().blur();
            registrationModal.passwordError.should('have.text', 'Password required');
            registrationModal.passwordInput.should('have.css', 'border-color', RED);
        });

        it('Password with 7 chars shows error', () => {
            registrationModal.passwordInput.type('Qwerty1', { sensitive: true }).blur();
            registrationModal.passwordError.should('have.text', PASSWORD_ERROR);
            registrationModal.passwordInput.should('have.css', 'border-color', RED);
        });

        it('Password with 16 chars shows error', () => {
            registrationModal.passwordInput.type('Qwerty1234567890', { sensitive: true }).blur();
            registrationModal.passwordError.should('have.text', PASSWORD_ERROR);
            registrationModal.passwordInput.should('have.css', 'border-color', RED);
        });

        it('Password without digit shows error', () => {
            registrationModal.passwordInput.type('Qwertyui', { sensitive: true }).blur();
            registrationModal.passwordError.should('have.text', PASSWORD_ERROR);
            registrationModal.passwordInput.should('have.css', 'border-color', RED);
        });

        it('Password without capital letter shows error', () => {
            registrationModal.passwordInput.type('qwerty12', { sensitive: true }).blur();
            registrationModal.passwordError.should('have.text', PASSWORD_ERROR);
            registrationModal.passwordInput.should('have.css', 'border-color', RED);
        });

        it('Password without small letter shows error', () => {
            registrationModal.passwordInput.type('QWERTY12', { sensitive: true }).blur();
            registrationModal.passwordError.should('have.text', PASSWORD_ERROR);
            registrationModal.passwordInput.should('have.css', 'border-color', RED);
        });

        it('Password with 8 chars is valid', () => {
            registrationModal.passwordInput.type('Qwerty12', { sensitive: true }).blur();
            registrationModal.passwordError.should('not.exist');
            registrationModal.passwordInput.should('not.have.css', 'border-color', RED);
        });

        it('Password with 15 chars is valid', () => {
            registrationModal.passwordInput.type('Qwerty123456789', { sensitive: true }).blur();
            registrationModal.passwordError.should('not.exist');
            registrationModal.passwordInput.should('not.have.css', 'border-color', RED);
        });
    });

    describe('Re-enter password', () => {
        it('Empty Re-enter password shows "Re-enter password required"', () => {
            registrationModal.repeatPasswordInput.focus().blur();
            registrationModal.repeatPasswordError.should('have.text', 'Re-enter password required');
            registrationModal.repeatPasswordInput.should('have.css', 'border-color', RED);
        });

        it('Different passwords show "Passwords do not match"', () => {
            registrationModal.passwordInput.type('Qwerty12', { sensitive: true });
            registrationModal.repeatPasswordInput.type('Qwerty13', { sensitive: true }).blur();
            registrationModal.repeatPasswordError.should('have.text', 'Passwords do not match');
            registrationModal.repeatPasswordInput.should('have.css', 'border-color', RED);
        });

        it('Same passwords have no error', () => {
            registrationModal.passwordInput.type('Qwerty12', { sensitive: true });
            registrationModal.repeatPasswordInput.type('Qwerty12', { sensitive: true }).blur();
            registrationModal.repeatPasswordError.should('not.exist');
            registrationModal.repeatPasswordInput.should('not.have.css', 'border-color', RED);
        });
    });

    describe('Register button', () => {
        it('Register is disabled when form is empty', () => {
            registrationModal.registerButton.should('be.disabled');
        });

        it('Register is disabled when email is invalid', () => {
            registrationModal.fillForm('John', 'Smith', 'test', 'Qwerty12', 'Qwerty12');
            registrationModal.registerButton.should('be.disabled');
        });

        it('Register is enabled when all data is valid', () => {
            registrationModal.fillForm('John', 'Smith', 'test@mail.com', 'Qwerty12', 'Qwerty12');
            registrationModal.registerButton.should('be.enabled');
        });
    });
});

describe('Successful registration and login', () => {
    const email = `cherevko.aqa+${Date.now()}@test.com`;
    const password = 'Qwerty12';

    after(() => {
        cy.request('DELETE', '/api/users');
    });

    it('User can register with valid data', () => {
        homePage.open();
        homePage.openRegistrationModal();
        cy.intercept('POST', '/api/auth/signup').as('signUp');

        registrationModal.signUp('John', 'Smith', email, password, password);

        cy.wait('@signUp').then(({ response }) => {
            expect(response.statusCode).to.eq(201);
        });
        cy.url().should('include', '/panel/garage');
    });

    it('User can log in with created account', () => {
        cy.login(email, password);
        cy.url().should('include', '/panel/garage');
    });
});
