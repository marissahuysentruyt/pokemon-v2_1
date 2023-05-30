import { AppContext } from '../AppProvider';
import { useContext, useCallback, useEffect } from 'react';
import HomePageButton from './HomePageButton';
import FeaturedCharacter from './FeaturedCharacter';
import { ComputerPokemon } from './ComputerPokemon';
import { Link } from 'react-router-dom';
import { GetOnePokemon } from './fetchPokemon';

const BattlePage = () => {

  const { selectedPokemon } = useContext(AppContext);
  const { computerPokemon, setComputerPokemon } = useContext(AppContext);

  const getComputerPokemon = useCallback(async () => {
      const randomPokemonId = Math.round(Math.random() * 151);
      const pokemonResponse = await GetOnePokemon(randomPokemonId);
      setComputerPokemon(pokemonResponse)
      // console.log(pokemonResponse, 'in function')
  }, [setComputerPokemon]);

  useEffect(() => {
    (async () => {
      await getComputerPokemon();
    })();
  }, [getComputerPokemon]);

  return selectedPokemon ? (
    <div>
      <HomePageButton />
      <h1 className="title">A wild <span className="capitalize">{computerPokemon.name}</span> appeared!</h1> 
      <h2 className="subtitle">Defeat your opponent!</h2> 
      <section className="featured-wrapper">
        <div className="featured__user">
          <FeaturedCharacter>
            <h2 className="capitalize">{ selectedPokemon.name }</h2>
            <img className="featured__image" src={ selectedPokemon.sprites.front_default } alt={selectedPokemon.name} />
          </FeaturedCharacter>
        </div>

        <div className='versus'>
          vs.
        </div>

        <div className="featured__computer">
          <FeaturedCharacter>
            <ComputerPokemon computerPokemon={computerPokemon} />
          </FeaturedCharacter>
        </div>
      </section>

      <Link className="begin-battle-button" to="/game">
        <div className='capitalize'>{selectedPokemon.name}, you know what to do!</div>
      </Link>
    </div>
  ) : 
    <div>
      <HomePageButton />
      <h1 className="title">Whoops!</h1>  
      <p className="subtitle">Did you select your pokemon yet?</p> 
    </div>
}

export default BattlePage;
