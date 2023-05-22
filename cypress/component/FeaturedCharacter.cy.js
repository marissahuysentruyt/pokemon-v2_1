import React from 'react';
import FeaturedCharacter from '../../src/components/FeaturedCharacter';

describe('<FeaturedCharacter />', () => {
  it('renders', () => {
    cy.mount(<FeaturedCharacter />)
  });
  it('returns props as children components', () => {
    cy.mount(<FeaturedCharacter>
      <h2>chansey</h2>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png" alt="chansey"/>
    </FeaturedCharacter>)
  });
})
