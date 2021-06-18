describe('profile test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should be visible', () => {
    cy.get('[data-cy="profile"]').should('be.visible').invoke('show');
  });

  it('should contain list items', () => {
    cy.get('[data-cy="profile"]').invoke('show').should('be.visible').find('li');
  });

  it('should contain wish list', () => {
    cy.get('[data-cy="profile-dropdown"]')
      .invoke('show')
      .should('be.visible')
      .find('li > [href="/wishlist"]')
      .click()
      .url()
      .should('include', '/wishlist');
  });

  it('should contain list item', () => {
    cy.get('[data-cy="profile-dropdown"]')
      .invoke('show')
      .find('li:nth-child(2)')
      .should('be.visible');
  });

  it('should contain list item', () => {
    cy.get('[data-cy="profile-dropdown"]')
      .invoke('show')
      .find('li:nth-child(3)')
      .should('be.visible');
  });
});
