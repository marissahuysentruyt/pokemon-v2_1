import fetchPokemon from "./fetchPokemon";

const getAllPokemon = () => {
  for(let i = 1; i < 152; i++) {
    fetchPokemon(i);
  }
}

export default getAllPokemon;
