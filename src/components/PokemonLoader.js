import React, { useState, useEffect } from "react";
import { GetBatchOfPokemon } from "./fetchPokemon";

const PokemonLoader = ({ limitNumber, indexNumber, children, pokemonList }) => {
  const [updatedPokemonList, setUpdatedPokemonList] = useState([]);

  // const [ limitNumber, setLimitNumber ] = useState(20);
  // const [ indexNumber, setIndexNumber ] = useState(-1);
  
  // const pokemonList = GetBatchOfPokemon(limitNumber, indexNumber);

  useEffect(() => {
    (async () => {
      const pokemonResponse = await GetBatchOfPokemon(limitNumber, indexNumber);
      setUpdatedPokemonList(pokemonResponse);
    })();
  }, [limitNumber, indexNumber]);

  console.log(updatedPokemonList, "updatedPokemonList from loader")
  // ^^^^ that logs the correct arrays

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, ([pokemonList] = updatedPokemonList));
        }
        return child;
      })}
    </>
  );
};

export default PokemonLoader;
