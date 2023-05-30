import { AppContext } from '../AppProvider';
import { useContext } from 'react';
import HomePageButton from './HomePageButton';
import FeaturedCharacter from './FeaturedCharacter';
import { ComputerPokemon } from './ComputerPokemon';

const BattlePage = () => {

  const { selectedPokemon, computerPokemon } = useContext(AppContext);

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

        <div className="featured__computer">
          <FeaturedCharacter>
            <ComputerPokemon />
          </FeaturedCharacter>
        </div>
      </section>
      
    </div>
  ) : 
    <div>
      <HomePageButton />
      <h1>Defeat your opponent!</h1>  
      <p>Did you select a pokemon yet?</p> 
    </div>
}

export default BattlePage;
