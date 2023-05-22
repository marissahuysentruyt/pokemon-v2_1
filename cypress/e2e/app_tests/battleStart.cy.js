describe('battle start page', () => {
  beforeEach(() => {
    cy.visit('/battleStart');
  });
  it('prevents navigation to battlePage if no selectedPokemon', () => {
    cy.get(".enter-battle").click();
    cy.url().should('contain', '/battleStart');
  });
  it('navigates to battlePage when there is a selectedPokemon', () => {
    // the API call is sometimes slow
    cy.wait(500);
    cy.get('.input-item').first().click();
    cy.get(".enter-battle").click();
    cy.url().should('contain', '/battlePage');
  });
  it('displays a form', () => {
    cy.get('form').should('have.class', 'selection__form');
  })
  it('generates random pokemon inside the form as inputs', () => {
    cy.get('input').should('have.length', 3);
  })
})
