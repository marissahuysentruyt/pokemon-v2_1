import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PokemonList from "../components/PokemonList";

describe('PokemonList', () => {
  it('returns the list heading', () => {
    render(
      <MemoryRouter>
        <PokemonList />
      </MemoryRouter>
    )
    const listHeading = screen.getByText('Original 151 Pokemon');
    // console.log(listHeading);
    expect(listHeading).toHaveAccessibleName('Original 151 Pokemon');
  });
  it('returns a back-to-top link', () => {
    render(
      <MemoryRouter>
        <PokemonList />
      </MemoryRouter>
    )
    const links = screen.getAllByRole('link');
    const backToTopLink = links[1];
    expect(backToTopLink).toHaveTextContent('☝️ Back to Top');
  })
  it('displays a list', () => {
    render(
      <MemoryRouter>
        <PokemonList />
      </MemoryRouter>
    )
    const pokemonList = screen.getByRole('list');
    // console.log(pokemonList);
    // expect(pokemonList).toBeEmptyDOMElement();
    expect(pokemonList).toBeEmptyDOMElement();
  });
});
