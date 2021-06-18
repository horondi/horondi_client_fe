import { selectorContains, shouldHaveValue, shouldBeNotVisible } from './helper.functions';

describe('currency test', () => {
  it('Items should be visible', () => {
    const currency = () => cy.window().its('store').invoke('getState').its('Currency');

    cy.visit('/');
    cy.viewport(1280, 720);
    cy.get(':nth-child(1) > [href="/backpacks"]').should('be.visible');
    cy.get(':nth-child(1) > [href="/bags"]').should('be.visible');
    cy.get(':nth-child(1) > [href="/accessories"]').should('be.visible');
    cy.get('[data-cy=currency]').should('be.visible');
    shouldHaveValue('currency', 0);
    currency().its('currency').should('eq', 0);
    cy.get('[data-cy=currency]').click();
    cy.get('[data-cy=currency1]');
    selectorContains('currency1', '\u20b4');
    selectorContains('currency2', '\u0024');
    cy.get('[data-cy=currency1]').click();
    shouldHaveValue('currency', 0);
    currency().its('currency').should('eq', 0);
    shouldBeNotVisible('currency1');
    shouldBeNotVisible('currency2');
    cy.get('[data-cy=currency]').click();
    cy.get('[data-cy=currency2]').click();
    shouldHaveValue('currency', 1);
    currency().its('currency').should('eq', 1);
    shouldBeNotVisible('currency1');
    shouldBeNotVisible('currency2');
  });
});
