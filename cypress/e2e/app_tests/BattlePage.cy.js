describe('Battle Page', () => {
  // if you just go to the /battlePage, you'll get a "Whoops" message
  // and a reminder to select a pokemon first
  it('returns a reminder to pick out a pokemon first on first load', () => {
    cy.visit('/battlePage');
    cy.get('.title').should('contain', 'Whoops!');
    cy.get('.subtitle').should('contain', 'Did you select your pokemon yet?');
  });
  // in order to see the BattlePage, you have to go through the steps of 
  // selecting a pokemon on the BattleStart page
  it("returns the computer's opponent pokemon after the user selects a pokemon on the battleStart page", () => {
    cy.visit('/battleStart');
    cy.wait(500);
    cy.get('.input-item').first().click();
    cy.get(".enter-battle").click();
    cy.get('.title').should('contain', 'A wild');
    cy.get('.featured__image').should('exist');
  });
  it('returns a button to proceed to the game', () => {
    cy.visit('/battleStart');
    cy.wait(500);
    cy.get('.input-item').first().click();
    cy.get(".enter-battle").click();
    cy.get('.begin-battle-button').should('contain', 'you know what to do');
  });
  it('navigates to the Game component page after both characters are chosen/saved', () => {
    cy.visit('/battleStart');
    cy.wait(500);
    cy.get('.input-item').first().click();
    cy.get(".enter-battle").click();
    cy.get('.begin-battle-button').should('contain', 'you know what to do');
    cy.get('.begin-battle-button').click();
    cy.url().should('contain', '/game');
  })
})
