import accountJson from '../../fixtures/user.json';

describe('/login', () => {
  beforeEach(() => {
    cy.visit('/#/login');
  });

  it('requires valid email & password', () => {
    cy.get('form').contains('Sign in').click();
    cy.get('.error-messages').should('contain', 'email or password is invalid');
  });

  it('navigates to #/ on successful login', () => {
    cy.get('input[type="email').type(accountJson.email);
    cy.get('input[type="password"]').type(accountJson.password);
    cy.get('button[type="submit"]').click();

    // when we are logged in, there should be two feeds
    cy.contains('a.nav-link', 'Your Feed').should('have.class', 'active');
    cy.contains('a.nav-link', 'Global Feed').should('not.have.class', 'active');
    // url is /
    cy.url().should('not.contain', '/login');
  });
});
