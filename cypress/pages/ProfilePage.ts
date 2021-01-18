class ProfilePage {
  getProfilePictureTxf() {
    return cy.findByPlaceholderText('URL of profile picture');
  }

  getUsernameTxf() {
    return cy.findByPlaceholderText('Username');
  }

  getBioTxf() {
    return cy.findByPlaceholderText('Short bio about you');
  }

  getUpdateBtn() {
    return cy.findByText('Update Settings');
  }

  updateProfile(profileUrl: string, username: string, bio: string): void {
    this.getProfilePictureTxf().clear();
    this.getProfilePictureTxf().type(profileUrl);
    this.getUsernameTxf().clear();
    this.getUsernameTxf().type(username);
    this.getBioTxf().clear();
    this.getBioTxf().type(bio);
    this.getUpdateBtn().click();
  }
}

export default new ProfilePage();
