import React from 'react';
import { ComputerPokemon } from '../../src/components/ComputerPokemon';

describe('<ComputerPokemon />', () => {
  it('renders', () => {
    cy.mount(<ComputerPokemon />)
  });
  it('returns a new opponent pokemon', () => {
    cy.mount(
      <ComputerPokemon computerPokemon={{
        'name': 'ivysaur',
        'base_experience': 78,
        'sprites': {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
          "back_female": null,
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
          "back_shiny_female": null,
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          "front_female": null,
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
          "front_shiny_female": null,
        }
      }} />
    );
  });
})
