describe('home page test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Click to news button', () => {
    cy.get('[href="/news"] > .MuiButtonBase-root').should('exist').and('be.visible').click();
  });

  it('Click to about us button', () => {
    cy.get('[href="/about-us"] > .MuiButtonBase-root').should('exist').and('be.visible').click();
  });

  it('"Horondi style" section tests', () => {
    cy.get('[data-cy="home-page"] > :nth-child(3)').should('exist').should('be.visible');
  });
});
