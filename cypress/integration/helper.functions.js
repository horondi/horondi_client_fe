export const selectorContains = (selector, data) => cy.get(`[data-cy=${selector}]`).contains(data);

export const shouldHaveValue = (selector, value) =>
  cy.get(`[data-cy=${selector}] input`).should('have.value', value);
export const shouldBeNotVisible = (selector) =>
  cy.get(`[data-cy=${selector}]`).should('not.be.visible');
