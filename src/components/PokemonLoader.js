import React, { useState, useEffect } from "react";
import { GetBatchOfPokemon } from "./fetchPokemon";

const PokemonLoader = ({ limitNumber, indexNumber, children, pokemonList }) => {
  const [updatedPokemonList, setUpdatedPokemonList] = useState([]);
  
  useEffect(() => {
    (async () => {
      const pokemonResponse = await GetBatchOfPokemon(limitNumber, indexNumber);
      setUpdatedPokemonList(pokemonResponse);
    })();
  }, [limitNumber, indexNumber]);

  // console.log(updatedPokemonList, "updatedPokemonList from loader")
  // ^^^^ that logs the correct array of pokemon objects

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // ([pokemonList] = updatedPokemonList) passes the updatedPokemonList to the listItems cmp
          return React.cloneElement(child, ([pokemonList] = updatedPokemonList));
        }
        return child;
      })}
    </>
  );
};

export default PokemonLoader;
