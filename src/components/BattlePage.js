import { AppContext } from '../AppProvider';
import { useContext } from 'react';
import HomePageButton from './HomePageButton';

const BattlePage = () => {

  const { selectedPokemon } = useContext(AppContext);

  return (
    <div>
      <HomePageButton />
      <h1>Defeat your opponent!</h1> 
      { selectedPokemon }
    </div>
  )
}

export default BattlePage;
