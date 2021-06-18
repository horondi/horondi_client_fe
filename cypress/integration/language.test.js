import { selectorContains, shouldHaveValue, shouldBeNotVisible } from './helper.functions';

describe('language test', () => {
  it('Items should be visible', () => {
    const language = () => cy.window().its('store').invoke('getState').its('Language');

    cy.visit('/');
    cy.viewport(1280, 720);
    cy.get(':nth-child(1) > [href="/backpacks"]').should('be.visible');
    cy.get(':nth-child(1) > [href="/bags"]').should('be.visible');
    cy.get(':nth-child(1) > [href="/accessories"]').should('be.visible');
    cy.get('[data-cy=language]').should('be.visible');
    shouldHaveValue('language', 0);
    language().its('language').should('eq', 0);
    cy.get('[data-cy=language]').click();
    selectorContains('language1', 'UA');
    selectorContains('language2', 'EN');
    cy.get('[data-cy=language1]').click();
    shouldHaveValue('language', 0);
    language().its('language').should('eq', 0);
    shouldBeNotVisible('language1');
    shouldBeNotVisible('language2');
    cy.get('[data-cy=language]').click();
    cy.get('[data-cy=language2]').click();
    shouldHaveValue('language', 1);
    language().its('language').should('eq', 1);
    shouldBeNotVisible('language1');
    shouldBeNotVisible('language2');
  });
});
