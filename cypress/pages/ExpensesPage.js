class ExpensesPage {
    open() {
        cy.get('.sidebar').contains('a', 'Fuel expenses').click();
    }

    openAddExpenseModal() {
        this.addExpenseButton.click();
    }

    addExpense(mileage, liters, totalCost) {
        this.mileageInput.clear().type(mileage);
        this.litersInput.type(liters);
        this.totalCostInput.type(totalCost);
        this.submitAddExpenseButton.click();
    }

    get addExpenseButton() {
        return cy.contains('button', 'Add an expense');
    }

    get mileageInput() {
        return cy.get('#addExpenseMileage');
    }

    get litersInput() {
        return cy.get('#addExpenseLiters');
    }

    get totalCostInput() {
        return cy.get('#addExpenseTotalCost');
    }

    get submitAddExpenseButton() {
        return cy.contains('.modal-content button', 'Add');
    }

    get expenseRows() {
        return cy.get('.expenses_table tbody tr');
    }

    get firstExpenseRow() {
        return this.expenseRows.first();
    }
}

export default new ExpensesPage();
