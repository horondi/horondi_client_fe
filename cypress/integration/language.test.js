describe('language test', () => {
  it('Items should be visible', () => {
    cy.visit('/');
    cy.viewport(1280, 720);
    cy.get('.makeStyles-logo-4').should('be.visible');
    cy.get(':nth-child(1) > [href="/backpacks"]').should('be.visible');
    cy.get(':nth-child(1) > [href="/bags"]').should('be.visible');
    cy.get(':nth-child(1) > [href="/accessories"]').should('be.visible');
    cy.get('#language').should('be.visible');
    cy.get('#language').click();
    cy.get('#language1').should('have.value', 0);
    cy.get('#language1').contains('UA');
    cy.get('#language2').contains('EN');
  });
});
