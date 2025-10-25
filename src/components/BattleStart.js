import { AppContext } from '../AppProvider';
import { useContext, useEffect, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetOnePokemon } from './fetchPokemon';
import HomePageButton from './HomePageButton';
import FeaturedCharacter from './FeaturedCharacter';
import PokemonCard from './PokemonCard';

export default function BattleStart() {
  const numberOfRandomPokemon = 3; 
  const { selectedPokemon, setSelectedPokemon, fetchedPokemon, setFetchedPokemon } = useContext(AppContext);
  const [refetching, setRefetching] = useState(false);  
  
// fetchPokemon function 3 times for 3 random pokemon, push those results (setFetchedPokemon) into the empty array
  const newFetch = useCallback(async () => {
    const pokemonArray = [];
    for(let i = 0; i < numberOfRandomPokemon; i++) {
      let pokemonId = Math.round(Math.random() * 151);
      const newPokemon = await GetOnePokemon(pokemonId)
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
    if(!selectedPokemon) return false;
    navigate('/battlePage');
  }

  const handleRefetch = async () => {
    await newFetch();
  }

  return (
    <div>
      <HomePageButton />
      <h1 className="title">Choose your Pokémon</h1>
      <section className="selection__wrapper">
        <form className="selection__form" onSubmit={handleSubmit}> 
          {/* Each of the generated Pokemon's name get passed to these inputs */}
          <div className='input-column'>
              {fetchedPokemon.map((pokemon) => (
                <div 
                  key={pokemon.id} 
                  className="selection__form-input-wrapper">
                  <PokemonCard 
                    pokemon={pokemon} 
                    name="pokemon-choices" 
                    onSelect={() => setSelectedPokemon(pokemon)}
                  />
                </div>
              ))}
          </div>

          {selectedPokemon &&
            <>
              <p>You've chosen:</p>
              <FeaturedCharacter>
                <h2 className="capitalize">{selectedPokemon.name}</h2>
                <img className="featured__image" src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
              </FeaturedCharacter>
            </>
          }

          <div className="button-container">
          <button type="button" className="begin-battle-button" onClick={() => 
              handleRefetch()}>Get New Pokemon</button>
          <button type="submit" className="enter-battle"
            onClick={() => {
              if(!selectedPokemon) {alert("make sure to select a pokemon!")}
            }}
          >Start Battle</button>          
          </div>
        </form>
      </section>
    </div>
  )
};
