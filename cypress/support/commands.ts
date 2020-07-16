import accountJson from '../fixtures/user.json';

Cypress.Commands.add('login', () => {
    cy.request({
        method: 'POST',
        url: 'https://conduit.productionready.io/api/users/login',
        body: {
            user: {
                email: accountJson.email,
                password: accountJson.password
            }
        }
    }).then((res) => {
        window.localStorage.setItem('jwt', res.body.user.token);
    });
});
