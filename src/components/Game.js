import { useContext } from "react";
import { AppContext } from "../AppProvider";

const Game = () => {
  const { computerPokemon, selectedPokemon } = useContext(AppContext);

  return (
    <>
      {selectedPokemon.name} vs. {computerPokemon.name}
    </>
  )
}

export default Game;
