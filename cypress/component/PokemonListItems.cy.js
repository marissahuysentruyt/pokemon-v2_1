import React from 'react';
import { PokemonListItems } from '../../src/components/PokemonListItems';

describe('<PokemonListItems />', () => {
  it('renders', () => {
    cy.mount(<PokemonListItems />)
  });
  it('returns multiple pokemon characters when their information is passed as props', () => {
    cy.mount(
      <PokemonListItems
        pokemonList={
          [{
            'name': 'charmander',
            'base-experience': 62,
          }, 
          {
            'name': 'charmeleon',
            'base-experience': 142,
          },
          {
            'name': 'charizard',
            'base-experience': 267,
          }]
        }
      />
    )
  })
})
