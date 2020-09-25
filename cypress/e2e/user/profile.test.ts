// from cypress/support/index.d.ts
/// <reference path="../../support/index.d.ts" />

import faker from 'faker';

describe('Profile', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/#/settings');
  });

  it('show my profile', () => {
    // url
    cy.get(':nth-child(1) > .form-control').clear();
    cy.get(':nth-child(1) > .form-control').type(faker.image.imageUrl());
    // username
    cy.get(':nth-child(2) > .form-control').clear();
    cy.get(':nth-child(2) > .form-control').type(faker.name.firstName());
    // bio
    cy.get(':nth-child(3) > .form-control').clear();
    cy.get(':nth-child(3) > .form-control').type(faker.lorem.sentences());
    cy.get('form > :nth-child(1) > .btn').click();
  });
});
