import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PokemonList from "../components/PokemonList";
import { AppContext } from "../AppProvider";
import { useContext } from "react";
// import { NameContext, NameProvider, NameConsumer } from "react-context"

describe('PokemonList', () => {
  // const { pokemonList } = useContext(AppContext);

  function displayPokemonList(pokemonList) {
    return (
      <AppContext.Provider value={pokemonList}>
        <AppContext.Consumer>
          {value => <PokemonList />}
        </AppContext.Consumer>
          
      </AppContext.Provider>
    )
  };

  // beforeEach(() => {
  //   displayPokemonList(pokemonList);
  // })

  it('returns the list heading', () => {
    // render(<NameConsumer />)
    const listHeading = screen.getByText('Original 151 Pokemon');
    // console.log(listHeading);
    expect(listHeading).toHaveAccessibleName('Original 151 Pokemon');
  });
  it('returns a back-to-top link', () => {
    const backToTopLink = screen.getByRole('link');
    // console.log(backToTopLink);
    expect(backToTopLink).toHaveTextContent('☝️ Back to Top');
  })
  it('displays a list', () => {
    const pokemonList = screen.getByRole('list');
    // console.log(pokemonList);
    // expect(pokemonList).toBeEmptyDOMElement();
    expect(pokemonList).toContainHTML('li');
  });
});
