import fetchPokemon from '../components/fetchPokemon';
// import pokemonListCharacters from './__mocks__/mockPokemon';

jest.mock('../components/fetchPokemon.js');
jest.spyOn(console, 'error').mockImplementation(() => {});

describe('fetchPokemon', () => {
  it.skip('returns Pokemon data if API is sucessful', async() => {
    const pokemonListCharacters = [
      {
        id: 2, 
        name: 'first pokemon', 
        image: 'not right now'
      },
      {
        id: 4, 
        name: 'second pokemon', 
        image: 'not right now'
      },
      {
        id: 6, 
        name: 'third pokemon', 
        image: 'not right now'
      },
      {
        id: 8, 
        name: 'fourth pokemon', 
        image: 'not right now'
      }
    ];

    console.log(pokemonListCharacters[3].id)
    const returnFetchData = await fetchPokemon(pokemonListCharacters[3].id);
    console.log(returnFetchData);

    const expectedResults = {
      id: 8, 
      name: 'fourth pokemon', 
      image: 'not right now'
    }

    // expect(fetchPokemon).toHaveBeenCalled();
    expect(returnFetchData).toMatchObject(expectedResults);
  });
  it.skip('returns loading state when waiting for API results', () => {

  });
  it.skip('returns an error when API fails', () => {

  })
})
