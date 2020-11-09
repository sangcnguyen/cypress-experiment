// from cypress/support/index.d.ts
/// <reference path="../../support/index.d.ts" />
import {ProfilePage} from '../../pages/ProfilePage';

import faker from 'faker';

describe('Profile', () => {
  const profilePage = new ProfilePage();

  beforeEach(() => {
    cy.login();
    cy.visit('/#/settings');
  });

  it('show my profile', () => {
    profilePage.updateProfile(faker.image.imageUrl(), faker.name.firstName(), faker.lorem.sentences());
    cy.url().should('not.contain', '/#/settings');
  });
});
