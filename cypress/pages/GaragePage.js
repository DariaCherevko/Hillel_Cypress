class GaragePage {
    open() {
        cy.get('.sidebar').contains('a', 'Garage').click();
    }

    addCar(brand, model, mileage) {
        this.addCarButton.click();
        this.brandSelect.select(brand);
        this.modelSelect.select(model);
        this.mileageInput.type(mileage);
        this.submitAddCarButton.click();
    }

    removeFirstCar() {
        this.firstCarEditButton.click();
        this.removeCarButton.click();
        this.confirmRemoveButton.click();
    }

    openAddExpenseModal() {
        this.firstCarAddExpenseButton.click();
    }

    get addCarButton() {
        return cy.contains('button', 'Add car');
    }

    get brandSelect() {
        return cy.get('#addCarBrand');
    }

    get modelSelect() {
        return cy.get('#addCarModel');
    }

    get mileageInput() {
        return cy.get('#addCarMileage');
    }

    get submitAddCarButton() {
        return cy.contains('.modal-content button', 'Add');
    }

    get carItems() {
        return cy.get('.car-item');
    }

    get firstCar() {
        return this.carItems.first();
    }

    get firstCarName() {
        return this.firstCar.find('.car_name');
    }

    get firstCarEditButton() {
        return this.firstCar.find('.car_edit');
    }

    get removeCarButton() {
        return cy.contains('.modal-content button', 'Remove car');
    }

    get confirmRemoveButton() {
        return cy.contains('.modal-content button', /^Remove$/);
    }

    get firstCarAddExpenseButton() {
        return this.firstCar.contains('button', 'Add fuel expense');
    }
}

export default new GaragePage();
