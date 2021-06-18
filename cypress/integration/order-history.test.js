const MOCK_EMAIL = Cypress.env('ADMIN_LOGIN');
const MOCK_PASSWORD = Cypress.env('ADMIN_PASSWORD');
describe('filled order history test', () => {
  it('should enter and open order history page', () => {
    cy.visit('/login');
    cy.get('form input[name=email]').should('be.visible').type(MOCK_EMAIL);
    cy.get('form input[name=password]').should('be.visible').type(MOCK_PASSWORD).type('{enter}');
    cy.wait(2000);
    cy.get('[data-cy="cabinet-dropdown"]')
      .invoke('show')
      .should('be.visible')
      .find('a[href="/order-history"]')
      .click();
    cy.get('[data-cy="cabinet-dropdown"]').invoke('hide');
  });
  it('should contains correct titles', () => {
    cy.get('[data-cy="order-history-order"]').contains('ЗАМОВЛЕННЯ');
    cy.get('[data-cy="order-history-order"]').contains('ДАТА');
    cy.get('[data-cy="order-history-order"]').contains('СТАТУС');
    cy.get('[data-cy="order-history-order"]').contains('ПРОДУКТ');
    cy.get('[data-cy="order-history-order"]').contains('ДАТА');
    cy.get('[data-cy="order-history-order"]').contains('ЦІНА');
    cy.get('[data-cy="order-history-order"]').contains('СУМА');
  });
  it('should contain correct order field', () => {
    cy.get('[data-cy="order-history-order-item-img"]').should('be.visible');
    cy.get('[data-cy="order-history-order-item-description"]').should('be.visible');
    cy.get('[data-cy="order-history-order-item-description"] span:nth-child(1)').should(
      'not.be.empty'
    );
    cy.get('[data-cy="order-history-order-item-description"] span:nth-child(2)').should(
      'not.be.empty'
    );
    cy.get('[data-cy="order-history-order-item-description"] span:nth-child(2)').should(
      'not.be.empty'
    );
    cy.get('[data-cy="order-history-order-item-description"] span:nth-child(2)').should(
      'not.be.empty'
    );
  });
});

describe('empty order history test', () => {
  it('should enter and open order history page', () => {
    cy.visit('/login');
    cy.get('form input[name=email]').should('be.visible').type(MOCK_EMAIL);
    cy.get('form input[name=password]').should('be.visible').type(MOCK_PASSWORD).type('{enter}');
    cy.wait(2000);
    cy.get('[data-cy="cabinet-dropdown"]')
      .invoke('show')
      .should('be.visible')
      .find('a[href="/order-history"]')
      .click();
    cy.get('[data-cy="cabinet-dropdown"]').invoke('hide');
  });
  it('should contain empty orders message and img', () => {
    cy.get('[data-cy=empty-order-history] > .MuiTypography-root').should(
      'contain',
      'Ваша історія замовлень пуста'
    );
    cy.get('[data-cy="empty-order-history"] img').should('be.visible');
  });
  it('should contain start shopping button', () => {
    cy.get('[data-cy=empty-order-history] > a > .MuiButtonBase-root').should('be.visible');
  });
  it('start shopping button should be clickable', () => {
    cy.get('[data-cy=empty-order-history] > a > .MuiButtonBase-root').click();
  });
});
