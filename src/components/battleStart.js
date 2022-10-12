import { AppContext } from '../AppProvider';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function BattleStart() {
  const { selectedPokemon, setSelectedPokemon, fetchedPokemon, setFetchedPokemon } = useContext(AppContext);
  const choosePokemon = (event) => {
    console.log(event);
    setSelectedPokemon(event.target.value)
  }
  
// array of pokemon objects
// call api 3 times for 3 random pokemon
  
  // const [ fetchedPokemon, setFetchedPokemon ] = useState({});
  // useEffect (when component mounts, it runs whatever it )
  useEffect(() => {
    const pokemonId = Math.floor(Math.random() * 151);
    const getPokemon = async (pokemonId) => {
      // console.log(pokemonId);
      const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
      // console.log(pokemonData);
      const pokemon = await pokemonData.json();
        console.log(pokemon)
        // return pokemon;
        setFetchedPokemon(pokemon)
      }
      getPokemon(pokemonId);


  }, [setFetchedPokemon]);
  // console.log(selectedPokemon)

  console.log(fetchedPokemon, 'is fetched')

  // 3pokemon, set3pokemon
  // empty array of objects, for each empty object run getPokemon, passing pokemonId each time

  return (
    <div>
      { selectedPokemon }
      <h1>Choose your Pokémon</h1>
      {/* iterate through object that gets returned from the API, the specific values generate the inputs
      make sure to get 3 random */}
      
      <input type="radio" name="pokemon-choices" value={fetchedPokemon.name} onChange={choosePokemon}/>
      {fetchedPokemon.name}
      <input type="radio" name="pokemon-choices" value={fetchedPokemon.name} onChange={choosePokemon}/>
      {fetchedPokemon.name}
      <input type="radio" name="pokemon-choices" value={fetchedPokemon.name} onChange={choosePokemon}/>
      {fetchedPokemon.name}

        <Link to="/battlePage" className="start-button enter-battle">Start Battle</Link> 
    </div>
  )
}


// value={pokemon.name} label pokemon.name
