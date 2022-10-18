import fetchPokemon from '../components/fetchPokemon';

describe('fetchPokemon', () => {
  it.skip('returns Pokemon data', async () => {
    const dittoId = 132;
    const exampleDittoData = {
      "base experience": 101,
      id: 132,
    }
    const usedFunctionForDitto = await fetchPokemon(dittoId);
    expect(usedFunctionForDitto).toContain(exampleDittoData);
  })
})
