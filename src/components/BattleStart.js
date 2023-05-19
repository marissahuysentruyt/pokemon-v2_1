import { AppContext } from '../AppProvider';
import { useContext, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetOnePokemon } from './fetchPokemon';
import HomePageButton from './HomePageButton';
import FeaturedCharacter from './FeaturedCharacter';

export default function BattleStart() {
  const numberOfRandomPokemon = 3; 
  const { selectedPokemon, setSelectedPokemon, fetchedPokemon, setFetchedPokemon } = useContext(AppContext);
  
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

  return (
    <div>
      <HomePageButton />
      <h1 className="title">Choose your Pokémon</h1>
      <section className="selection__wrapper">
        <form className="selection__form" onSubmit={handleSubmit}> 
          {/* Each of the generated Pokemon's name get passed to these inputs */}
          <div className='input-column'>
            <div className="selection__form-input-wrapper">
              <label className="input-item">
                <input type="radio" name="pokemon-choices" value={fetchedPokemon[0]?.name} onChange={() => setSelectedPokemon(fetchedPokemon[0])}/>
                {fetchedPokemon[0]?.name}
                <img className="input-image" src={fetchedPokemon[0]?.sprites.front_default} alt={fetchedPokemon[0]?.name} />
              </label>
            </div>
            <div className="selection__form-input-wrapper">
              <label className="input-item">
                <input type="radio" name="pokemon-choices" value={fetchedPokemon[1]?.name} onChange={() => setSelectedPokemon(fetchedPokemon[1])}/>
                {fetchedPokemon[1]?.name}
                <img className="input-image" src={fetchedPokemon[1]?.sprites.front_default} alt={fetchedPokemon[1]?.name} />
              </label>
            </div>
            <div className="selection__form-input-wrapper">
              <label className="input-item">
                <input type="radio" name="pokemon-choices" value={fetchedPokemon[2]?.name} onChange={() => setSelectedPokemon(fetchedPokemon[2])}/>
                {fetchedPokemon[2]?.name}
                <img className="input-image" src={fetchedPokemon[2]?.sprites.front_default} alt={fetchedPokemon[2]?.name} />
              </label>
            </div>
          </div>

          {selectedPokemon &&
            <>
              <p>You've chosen:</p>
              <FeaturedCharacter>
                <div className="featured">
                  <h2>{selectedPokemon.name}</h2>
                  <img className="featured__image"src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
                </div>
              </FeaturedCharacter>
            </>
          }

          <button type="submit" className="enter-battle"
            onClick={() => {
              if(!selectedPokemon) {alert("make sure to select a pokemon!")}
            }}
          >Start Battle</button> 
        </form>
      </section>
    </div>
  )
};
