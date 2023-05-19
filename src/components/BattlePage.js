import { AppContext } from '../AppProvider';
import { useContext } from 'react';
import HomePageButton from './HomePageButton';

const BattlePage = () => {

  const { selectedPokemon } = useContext(AppContext);

  return selectedPokemon ? (
    <div>
      <HomePageButton />
      <h1>Defeat your opponent!</h1> 
      { selectedPokemon.name }
      <img src={ selectedPokemon.sprites.front_default } alt={selectedPokemon.name} />
    </div>
  ) : 
    <div>
      <HomePageButton />
      <h1>Defeat your opponent!</h1>  
      <p>Did you select a pokemon yet?</p> 
    </div>
}

export default BattlePage;
