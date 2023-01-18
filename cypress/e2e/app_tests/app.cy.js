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
})
