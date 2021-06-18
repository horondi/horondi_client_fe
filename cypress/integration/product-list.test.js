/* eslint-disable cypress/no-assigning-return-values */
describe('products tests', () => {
  it('products should be sorted by popularity', () => {
    cy.visit('/bags');
    cy.get('[data-cy=model-name]').click();
    const products = () => cy.window().its('store').invoke('getState').its('Products');
    cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root').select('популярністю', {
      log: true
    });
    cy.wait(5000);
    products().its('sortByPopularity').should('be.equal', -1);
    products().its('sortByPrice').should('be.equal', 0);
    products().its('sortByRate').should('be.equal', 0);
    products()
      .its('products')
      .should(($products) => {
        expect($products[0].purchasedCount).to.be.equal(46);
        expect($products[$products.length - 1].purchasedCount).to.be.equal(10);
      });
  });
  it('products should be sorted by price ascending', () => {
    cy.visit('/bags');
    cy.get('[data-cy=model-name]').click();
    const products = () => cy.window().its('store').invoke('getState').its('Products');
    cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root').select(
      'від дешевих до дорогих'
    );
    cy.wait(5000);
    products().its('sortByPopularity').should('be.equal', 0);
    products().its('sortByPrice').should('be.equal', 1);
    products().its('sortByRate').should('be.equal', 0);
    products()
      .its('products')
      .should(($products) => {
        expect($products[0].basePrice[0].value).to.be.equal(50000);
        expect($products[$products.length - 1].basePrice[0].value).to.be.equal(50000);
      });
  });
  it('products should be sorted by price descending', () => {
    const products = () => cy.window().its('store').invoke('getState').its('Products');
    cy.visit('/bags');
    cy.get('[data-cy=model-name]').click();
    cy.get(
      '.MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root'
    ).select('від дорогих до дешевих', { log: true });
    cy.wait(3000);
    products().its('sortByPopularity').should('be.equal', 0);
    products().its('sortByPrice').should('be.equal', -1);
    products().its('sortByRate').should('be.equal', 0);
    products()
      .its('products')
      .should(($products) => {
        expect($products[0].basePrice[0].value).to.be.equal(50000);
        expect($products[$products.length - 1].basePrice[0].value).to.be.equal(50000);
      });
  });
  it('products should be sorted by rate descending', () => {
    const products = () => cy.window().its('store').invoke('getState').its('Products');
    cy.visit('/bags');
    cy.get('[data-cy=model-name]').click();
    cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root').select('рейтингом', {
      log: true
    });
    cy.wait(3000);
    products().its('sortByPopularity').should('be.equal', 0);
    products().its('sortByPrice').should('be.equal', 0);
    products().its('sortByRate').should('be.equal', -1);
    products()
      .its('products')
      .should(($products) => {
        expect($products[0].rate).to.be.equal(5);
        expect($products[$products.length - 1].rate).to.be.equal(4);
      });
  });
  it('there should be 6 products in store', () => {
    const products = () => cy.window().its('store').invoke('getState').its('Products');
    cy.visit('/bags');
    cy.get('[data-cy=model-name]').click();
    cy.get('[data-cy="nine products per page"]').click();
    cy.wait(3000);
    products().its('products').should('have.length', 6);
    products().its('countPerPage').should('be.equal', 9);
  });

  it('there should be 18 products in store', () => {
    const products = () => cy.window().its('store').invoke('getState').its('Products');
    cy.visit('/bags');
    cy.get('[data-cy=model-name]').click();
    cy.get('[title="eighteen products per page"]').click();
    cy.wait(3000);
    products().its('products').should('have.length', 6);
    products().its('countPerPage').should('be.equal', 18);
  });
  it('there should be 30 products in store', () => {
    const products = () => cy.window().its('store').invoke('getState').its('Products');
    cy.visit('/bags');
    cy.get('[data-cy=model-name]').click();
    cy.get('[data-cy="thirty products per page"]').click();
    cy.wait(3000);
    products().its('products').should('have.length', 6);
    products().its('countPerPage').should('be.equal', 30);
  });

  it('current page must be added to store', () => {
    cy.get('.MuiPagination-ul').should('be.visible');
  });
});

describe('filter test', () => {
  it('Click to clear filter button', () => {
    cy.visit('/bags');
    cy.get('[data-cy=model-name]').click();
    cy.get('[data-cy="bags"]').should('exist').and('be.visible');
    cy.get('[data-cy="backpacks"]').should('exist').and('be.visible');
    cy.get('[data-cy="accessories"]').should('exist').and('be.visible');
    cy.get('[data-cy="clear_filter_button"]').should('exist').and('be.visible').click();
  });
  it('Click to filter button', () => {
    cy.visit('/bags');
    cy.get('[data-cy=model-name]').click();
    cy.get('[data-cy="filter_button"]').should('exist').and('be.visible').click();
  });
  it('Filters should be exist', () => {
    cy.visit('/bags');
    cy.get('[data-cy=model-name]').click();
    cy.get('[data-cy="search"]').should('exist').and('be.visible');
    cy.get('[data-cy="hot_item_filter"]').should('exist').and('be.visible');
    cy.get('[data-cy="price_filter"]').should('exist').and('be.visible');
    cy.get('[data-cy="category_filter"]').should('exist').and('be.visible');
    cy.get('[data-cy="colors_filter"]').should('exist').and('be.visible');
    cy.get('[data-cy="patterns_filter"]').should('exist').and('be.visible');
  });
});
