describe('Product details test', () => {
  beforeEach(() => {
    const horondi = {
      accessToken: null,
      _id: null,
      wishlist: [],
      language: 0,
      cart: []
    };
    localStorage.setItem('horondi', JSON.stringify(horondi));
  });

  it('product info should be visible', () => {
    cy.visit('/backpacks/c3a84a5b9866c30390366168');
    cy.contains('Ролтоп сірий 1');
    cy.contains('Опис продукту');
    cy.contains('Внутрішній матеріал');
    cy.contains('Основна тканина');
    cy.contains('Довжина лямок');
    cy.contains('Ціна');
    cy.contains(`Об'єм`);
    cy.contains('Вага');
    cy.contains('Колір');
    cy.contains('Візерунок');
  });

  it(`throw an error if size isn't selected`, () => {
    cy.contains('В кошик').click();
    cy.contains('Виберіть розмір продукту');
  });

  it('should add and remove product wishful', () => {
    cy.get('[data-cy="wishful"]')
      .click()
      .should(() => {
        expect(JSON.parse(localStorage.getItem('horondi')).wishlist).to.have.length(1);
      });
    cy.get('[data-cy="wishful"]')
      .click()
      .should(() => {
        expect(JSON.parse(localStorage.getItem('horondi')).wishlist).to.have.length(0);
      });
  });

  it('should add product to cart', () => {
    cy.get('[data-cy="sizes"]').click();
    cy.contains('В кошик')
      .click()
      .should(() => {
        expect(JSON.parse(localStorage.getItem('horondi')).cart).to.have.length(1);
      });
  });

  it('should redirect to checkout page', () => {
    cy.get('[data-cy="sizes"]').click();
    cy.contains('Купити зараз').click().url().should('include', '/cart');
  });

  it('should change price when pocket checked', () => {
    cy.visit('/backpacks/c3a84a5b9866c30390366168');
    cy.contains('Кишеня').click();
    cy.get('[data-cy="price"]').contains('1550');
    cy.contains('Кишеня').click();
    cy.get('[data-cy="price"]').contains('1450');
  });

  it('should change price when bag bottom selected', () => {
    cy.get('[data-cy="productSelect"]').click();
    cy.contains('Натуральна шкіра').click();
    cy.get('[data-cy="price"]').contains('1800');
    cy.get('[data-cy="productSelect"]').click();
    cy.contains('Жоден').click();
    cy.get('[data-cy="price"]').contains('1450');
  });

  it('comment inputs should be visible and editable', () => {
    cy.get('[data-cy="rate"]').should('exist').and('be.visible');
    cy.get('[data-cy="firstName"]').should('exist').and('be.visible');
    cy.get('[data-cy="email"]').should('exist').and('be.visible');
    cy.get('[data-cy="text"]').should('exist').and('be.visible');
    cy.get('[data-cy=email] > .MuiInputBase-root > .MuiInputBase-input')
      .type('vas.mytro@gmail.com')
      .should('have.value', 'vas.mytro@gmail.com');
    cy.get('[data-cy=firstName] > .MuiInputBase-root > .MuiInputBase-input')
      .type('Dimas')
      .should('have.value', 'Dimas');
    cy.get('[data-cy=text] > .MuiInputBase-root > .MuiInputBase-input')
      .type('Nice bag')
      .should('have.value', 'Nice bag');
    cy.get('form > .MuiButtonBase-root > .MuiButton-label').click();
    cy.contains('Dimas');
  });
});
