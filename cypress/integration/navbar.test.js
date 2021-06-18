describe('Navbar test', () => {
  it('items should be visible', () => {
    cy.visit('/');
    cy.viewport(1280, 720);
    cy.get('header').should('be.visible');
    cy.get('.MuiTypography-root > [href="/"]').should('be.visible');
    cy.get('.MuiToolbar-root > [href="/backpacks"]').should('be.visible');
    cy.get('.MuiToolbar-root > [href="/bags"]').should('be.visible');
    cy.get('.MuiToolbar-root > [href="/accessories"]').should('be.visible');
  });

  it('should move to a certain page', () => {
    cy.get('.MuiToolbar-root > [href="/backpacks"]').click().url().should('include', '/backpacks');
    cy.get('.MuiToolbar-root  > [href="/bags"]').click().url().should('include', '/bags');
    cy.get('.MuiToolbar-root  > [href="/accessories"]')
      .click()
      .url()
      .should('include', '/accessories');
    cy.get('.MuiTypography-root > [href="/"]').click().url().should('include', '/');
  });
});
