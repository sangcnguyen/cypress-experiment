class SignInPage {
  getUsernameTxf() {
    return cy.get('input[type="email');
  }

  getPasswordTxf() {
    return cy.get('input[type="password"]');
  }

  getSubmitBtn() {
    return cy.get('button[type="submit"]');
  }

  getErrorMessage() {
    return cy.get('.error-messages');
  }

  enterAccount(username?: string, password?: string): void {
    if (username) {
      this.getUsernameTxf().clear();
      this.getUsernameTxf().type(username);
    }
    if (password) {
      this.getPasswordTxf().clear();
      this.getPasswordTxf().type(password);
    }
    this.getSubmitBtn().click();
  }
}

export default new SignInPage();
