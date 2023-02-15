import HomePageButton from "./HomePageButton";
import { HashLink } from "react-router-hash-link";
import PokemonLoader from "./PokemonLoader";
import { PokemonListItems } from "./PokemonListItems";
import { useState, useEffect, useCallback } from "react";
import { GetBatchOfPokemon } from "./fetchPokemon";



const PokemonList = () => {
  const [ limitNumber, setLimitNumber ] = useState(10);
  const [ indexNumber, setIndexNumber ] = useState(19);
  // const [pokemonList, setPokemonList] = useState([]);
  
  const getPokemon = async (limitNumber, indexNumber) => {
    const pokemonResponse = await GetBatchOfPokemon(limitNumber, indexNumber);
    // console.log(pokemonResponse)
    return pokemonResponse;
  }
  
  // useEffect(() => {
  //   (async () => {
  //     const data = await getPokemon();
  //     return data;
  //     // console.log(data)
  //     // setUpdatedPokemonList(data);
  //     // console.log(updatedPokemonList)
  //   })();
  // }, [])
  
  // console.log(getPokemon(limitNumber, indexNumber))

  // const pokemonList = GetBatchOfPokemon(limitNumber, indexNumber);
  // console.log(pokemonList, 'from parent list component')
  // useEffect(() => {
  //   setPokemonList(pokemonList);
  // }, [pokemonList])


  // const pokemonList = [
  //   {
  //     name: "bulbasaur",
  //     id: 1,
  //     base_experience: 64,
  //   }, {
  //     name: "bulbasaur",
  //     id: 2,
  //     base_experience: 64,
  //   }, {
  //     name: "bulbasaur",
  //     id: 3,
  //     base_experience: 64,
  //   },
  // ]
  // ^^^^ that'll display just fine. 

  return (
    <>
      <PokemonLoader limitNumber={limitNumber} indexNumber={indexNumber} 
        // getPokemonData={getPokemon(limitNumber, indexNumber)}
      >
        <HomePageButton />
        <PokemonListItems pokemonList={getPokemon(limitNumber, indexNumber)}/>
      </PokemonLoader>
    </>
  )
}

export default PokemonList;
