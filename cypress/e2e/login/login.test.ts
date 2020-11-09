import accountJson from '../../fixtures/user.json';
import {SignInPage} from '../../pages/SignInPage';

describe('Login', () => {
  const signinPage = new SignInPage();

  beforeEach(() => {
    cy.visit('/#/login');
  });

  it('requires valid email & password', () => {
    signinPage.enterAccount();
    signinPage.getErrorMessage().should('contain', 'email or password is invalid');
  });

  it('navigates to #/ on successful login', () => {
    signinPage.enterAccount(accountJson.email, accountJson.password);
    // when we are logged in, there should be two feeds
    cy.contains('a.nav-link', 'Your Feed').should('have.class', 'active');
    cy.contains('a.nav-link', 'Global Feed').should('not.have.class', 'active');
    // url is /
    cy.url().should('not.contain', '/login');
  });
});
