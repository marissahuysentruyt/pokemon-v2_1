import { useState } from "react";

export const GetOnePokemon = async (pokemonId) => {
  try {
    const fetchedPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const pokemonResponse = await fetchedPokemon.json();
    // console.log(pokemonResponse.name);
    return pokemonResponse;
  }
  catch (e) {
    console.log('something went wrong');
    return (
      <>
        <div>Something went wrong!</div>
      </>
    )
  }
}

// these functions do what I think I want/expect in the browser console
// const GetOnePokemon = async (pokemonId) => {
//   const fetchedPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
//     // .then((response)=> response.json())
//   const pokemonResponse = await fetchedPokemon.json();
//     // .then((pokemon) => console.log(pokemon.name));
//     console.log(pokemonResponse.name)
//   return pokemonResponse;
// }

// const GetBatchOfPokemon = async (limitNumber, indexNumber) => {
//   const pokemonArray = [];
//   for(let i = indexNumber + 1; i <= (indexNumber + limitNumber); i++) {
//     const newPokemon = await GetOnePokemon((i + 1));
//     console.log(newPokemon.base_experience);
//     pokemonArray.push(newPokemon)
//     console.log(pokemonArray, 'batch');
//   }
//     return pokemonArray;
// }

export const GetBatchOfPokemon = async (limitNumber, indexNumber) => {
  // const [pokemonData, setPokemonData] = useState(null);

  // for(let i = indexNumber + 1; i <= (indexNumber + limitNumber); i++) {
  //   const newPokemon = await GetOnePokemon((i + 1));
  //   console.log(newPokemon);
  //   setPokemonData([ ...pokemonData, ...newPokemon ]);
  //   console.log(pokemonData, 'data');
  // }
  // return pokemonData;

  const pokemonArray = [];
  for(let i = indexNumber + 1; i <= (indexNumber + limitNumber); i++) {
    const newPokemon = await GetOnePokemon((i + 1));
    // console.log(newPokemon.base_experience);
    pokemonArray.push(newPokemon)
    // console.log(pokemonArray.length);
  }
    return pokemonArray;
}

