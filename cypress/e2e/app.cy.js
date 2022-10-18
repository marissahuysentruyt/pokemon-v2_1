describe('the app', () => {
  it('i choose you link navigates to landing page', () => {
    cy.visit('/');
    cy.get('.enter').click();
    cy.url().should('contain', '/home');
  });
  it('start link navigates to battle start page', () => {
    cy.visit('/home');
    cy.get(".start-button").click();
    cy.url().should('contain', '/battleStart');
  });
  it('prevents navigation to battlePage if no selectedPokemon', () => {
    cy.visit('/battleStart');
    cy.get(".start-button").click();
    cy.url().should('contain', '/battleStart');
  });
  it('navigate to battlePage when there is a selectedPokemon', () => {
    cy.visit('/battleStart');
    cy.wait(500);
    cy.get('input').first().click();
    cy.get(".start-button").click();
    cy.url().should('contain', '/battlePage');
  });
})
