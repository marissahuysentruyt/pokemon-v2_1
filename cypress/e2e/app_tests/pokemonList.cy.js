describe('pokemon list page', () => {
  beforeEach(() => {
    cy.visit('/pokemonList');
    // the next line is for calling the entire API
    // cy.intercept(`https://pokeapi.co/api/v2/pokemon/*`).as('loadingPokemon');
    // example.json has data for the first pokemon only. Fixtures is "replacing"
    // the actual fetch call and intercept is rerouting it to hit example.json instead
    cy.intercept(`https://pokeapi.co/api/v2/pokemon/*`, { fixture: 'example.json'}).as('loadingPokemon');
    cy.wait('@loadingPokemon');
  });
  it('navigates to the top of the page if back-to-top link is clicked', () => {
    cy.get('.back-to-top').click();
    cy.url().should('contain', '#to-top-of-list');
  });
  it('displays a list', () => {
    cy.get('ul').should('have.class', 'grid-list-all');
  });
  // this test may change when the PokemonList gets refactored. 
  it('displays 151 pokemon characters', () => {
    cy.get('.grid-list-all__item').should('have.length', 151);
  });
  // until the PokemonList component gets refactored, this test will also 
  // continue to fail. It only works if cy.wait(xxxx) is called
  it('displays each character\'s image, name & hp', () => {
    // each pokemon card item contains its own ul...
    // and each ul should have a li that has each class name
    cy.get('.item-character-info__sprite')
    .should('exist').and('be.visible');
    cy.get('.item-character-info__name')
    .should('exist').and('be.visible');
    cy.get('.item-character-info__hp')
    .should('exist').and('be.visible');
  })
});

