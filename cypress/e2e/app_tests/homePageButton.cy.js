describe('homepage button', () => {
  it('does not navigate away from the homepage, if already on the homepage', () => {
    cy.visit('/home');
    cy.findByRole('link', {name: 'Home'}).click()
    cy.url().should('not.contain', '/battleStart')
    .and('not.contain', '/pokemonList')
    .and('not.contain', '/battlePage');
  });
  it('navigates back to the homepage if not on the homepage', () => {
    cy.visit('/battleStart')
    cy.findByRole('link', {name: 'Home'}).click()
    cy.url().should('contain', '/home');

    cy.visit('/battlePage')
    cy.findByRole('link', {name: 'Home'}).click()
    cy.url().should('contain', '/home');

    cy.visit('/pokemonList')
    cy.findByRole('link', {name: 'Home'}).click()
    cy.url().should('contain', '/home');
  });

})

