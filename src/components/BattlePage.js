import { AppContext } from '../AppProvider';
import { useContext } from 'react';



const BattlePage = () => {

  const { selectedPokemon } = useContext(AppContext);

  return (
    <div>
      <h1>Defeat your opponent!</h1> 
      { selectedPokemon }
    </div>
  )
}

export default BattlePage;
