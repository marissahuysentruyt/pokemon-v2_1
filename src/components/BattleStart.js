import { AppContext } from '../AppProvider';
import { useContext, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchPokemon from './fetchPokemon';

export default function BattleStart() {
  const numberOfRandomPokemon = 3; 
  const { selectedPokemon, setSelectedPokemon, fetchedPokemon, setFetchedPokemon } = useContext(AppContext);
  const choosePokemon = (event) => {
    console.log(event);
    setSelectedPokemon(event.target.value)
  }
  
// fetchPokemon function 3 times for 3 random pokemon, push those results (setFetchedPokemon) into the empty array
  const newFetch = useCallback(async () => {
    const pokemonArray = [];
    for(let i = 0; i < numberOfRandomPokemon; i++) {
      let pokemonId = Math.round(Math.random() * 151);
      const newPokemon = await fetchPokemon(pokemonId)
      pokemonArray.push(newPokemon);
      // console.log(pokemonArray, i, 'for loop');
    }
    setFetchedPokemon(pokemonArray);
}, [setFetchedPokemon]);

  useEffect(() => {
    newFetch();
  }, [newFetch]);
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedPokemon);
    if(!selectedPokemon) return false;
    navigate('/battlePage');
  }

  return (
    <div>
      { selectedPokemon }
      <h1>Choose your Pokémon</h1>
      <form onSubmit={handleSubmit}> 
        {/* Each of the generated Pokemon's name get passed to these inputs */}
        <input type="radio" name="pokemon-choices" value={fetchedPokemon[0]?.name} onChange={choosePokemon}/>
        {fetchedPokemon[0]?.name}
        <input type="radio" name="pokemon-choices" value={fetchedPokemon[1]?.name} onChange={choosePokemon}/>
        {fetchedPokemon[1]?.name}
        <input type="radio" name="pokemon-choices" value={fetchedPokemon[2]?.name} onChange={choosePokemon}/>
        {fetchedPokemon[2]?.name}
        <button type="submit" className="start-button enter-battle">Start Battle</button> 
      </form>
    </div>
  )
};
