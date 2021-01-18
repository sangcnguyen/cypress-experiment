// from cypress/support/index.d.ts
/// <reference path="../../support/index.d.ts" />

import faker from 'faker';
import ProfilePage from '../../pages/ProfilePage';

describe('Profile', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/#/settings');
  });

  it('show my profile', () => {
    ProfilePage.updateProfile(faker.image.imageUrl(), faker.name.firstName(), faker.lorem.sentences());
    cy.url().should('not.contain', '/#/settings');
  });
});
