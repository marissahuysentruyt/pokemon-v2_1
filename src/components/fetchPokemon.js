// let pokemonId = Math.round(Math.random() * 151);
const fetchPokemon = async (pokemonId) => {
  const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  const pokemonData = await pokemonResponse.json();
  // console.log(pokemonData);
  return pokemonData;
}

export default fetchPokemon;
