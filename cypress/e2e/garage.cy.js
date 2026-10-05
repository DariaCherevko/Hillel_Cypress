import homePage from '../pages/HomePage';
import loginModal from '../pages/LoginModal';
import garagePage from '../pages/GaragePage';
import expensesPage from '../pages/ExpensesPage';

describe('Garage and fuel expenses', () => {
    beforeEach(() => {
        homePage.open();
        homePage.openSignInModal();
        loginModal.loginAsUser();
    });

    afterEach(() => {
        garagePage.open();
        garagePage.removeFirstCar();
    });

    it('Add car', () => {
        garagePage.addCar('Audi', 'TT', 500);
        garagePage.firstCarName.should('have.text', 'Audi TT');
    });

    it('Add fuel expense from Fuel expenses page', () => {
        garagePage.addCar('Audi', 'TT', 500);
        expensesPage.open();
        expensesPage.openAddExpenseModal();
        expensesPage.addExpense(510, 20, 50);
        expensesPage.firstExpenseRow.should('contain', '510').and('contain', '20L').and('contain', '50.00 USD');
    });
});
