export class SignInPage {
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
      this.getUsernameTxf().type(username);
    }
    if (password) {
      this.getPasswordTxf().type(password);
    }
    this.getSubmitBtn().click();
  }
}
