describe('battle start page', () => {
  it('prevents navigation to battlePage if no selectedPokemon', () => {
    cy.visit('/battleStart');
    cy.get(".start-button").click();
    cy.url().should('contain', '/battleStart');
  });
  it('navigates to battlePage when there is a selectedPokemon', () => {
    cy.visit('/battleStart');
    // the API call is sometimes slow
    cy.wait(500);
    cy.get('input').first().click();
    cy.get(".start-button").click();
    cy.url().should('contain', '/battlePage');
  });
})