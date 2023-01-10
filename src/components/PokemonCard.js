import { AppContext } from "../AppProvider";
import { useCallback, useContext, useEffect } from "react";
import fetchPokemon from "./fetchPokemon";

const PokemonCard = () => {
  const numberOfOriginalPokemon = 151;
  const { fetchedPokemon, setFetchedPokemon } = useContext(AppContext);

  // get all the pokemon available for the game
  const newFetch = useCallback(async () => {
    const pokemonArray = [];
    for(let i = 1; i <= numberOfOriginalPokemon; i++) {
      const newPokemon = await fetchPokemon(i)
      pokemonArray.push(newPokemon);
    }
    // console.log(pokemonArray);
    setFetchedPokemon(pokemonArray);
}, [setFetchedPokemon]);

  useEffect(() => {
    newFetch();
  }, [newFetch]);

  return (
    <div> 
      <h2>pokemon.name</h2>
      <h3>pokemon.sprite</h3>
      <h3>pokemon.moves[0].move.name</h3>
      <h3>pokemon.stats[0].base_stat HP</h3>
    </div>
  )
}

export default PokemonCard;
