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
            'base_experience': 62,
            'sprites': {
              "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
              "back_female": null,
              "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png",
              "back_shiny_female": null,
              "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
            }
          }, 
          {
            'name': 'charmeleon',
            'base_experience': 142,
            'sprites': {
              "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png",
              "back_female": null,
              "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/5.png",
              "back_shiny_female": null,
              "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
            }
          },
          {
            'name': 'charizard',
            'base_experience': 267,
            'sprites': {
              "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
              "back_female": null,
              "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/6.png",
              "back_shiny_female": null,
              "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
            }
          }]
        }
      />
    )
  })
})
