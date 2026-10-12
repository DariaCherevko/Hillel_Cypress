import homePage from '../pages/HomePage';
import loginModal from '../pages/LoginModal';
import garagePage from '../pages/GaragePage';
import expensesPage from '../pages/ExpensesPage';
import data from '../fixtures/garage.json';

describe('Car and expense', () => {
    let carId;

    beforeEach(() => {
        homePage.open();
        homePage.openSignInModal();
        loginModal.loginAsUser();
        cy.url().should('include', '/panel/garage');
    });

    after(() => {
        cy.request('DELETE', `/api/cars/${carId}`);
    });

    it('Should create a car via UI and intercept', () => {
        cy.intercept('POST', '/api/cars').as('createCar');
        garagePage.addCar(data.car.brand, data.car.model, data.car.mileage);

        cy.wait('@createCar').then(({ response }) => {
            expect(response.statusCode).to.eq(201);
            carId = response.body.data.id;
        });
    });

    it('Should return the created car in the cars list', () => {
        cy.request('GET', '/api/cars').then((response) => {
            expect(response.status).to.eq(200);

            const car = response.body.data.find((item) => item.id === carId);

            expect(car).to.exist;
            expect(car.brand).to.eq(data.car.brand);
            expect(car.model).to.eq(data.car.model);
            expect(car.mileage).to.eq(data.car.mileage);
        });
    });

    it('Should create a fuel expense via API', () => {
        const expense = {
            carId,
            reportedAt: new Date().toISOString().slice(0, 10),
            mileage: data.expense.mileage,
            liters: data.expense.liters,
            totalCost: data.expense.totalCost
        };

        cy.createExpense(expense).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.include(expense);
        });
    });

    it('Should display the created expense in UI', () => {
        expensesPage.open();
        expensesPage.selectedCar.should('have.text', `${data.car.brand} ${data.car.model}`);

        expensesPage.firstExpenseRow
            .should('contain', `${data.expense.mileage}`)
            .and('contain', `${data.expense.liters}L`)
            .and('contain', `${data.expense.totalCost}.00 USD`);
    });
});
