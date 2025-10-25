import React, { useState } from 'react';

const AppContext = React.createContext({});
const AppProvider = (props) => {
  const [ selectedPokemon, setSelectedPokemon ] = useState("");
  const [ fetchedPokemon, setFetchedPokemon ] = useState([]);
  const [ computerPokemon, setComputerPokemon ] = useState("");
  const [  pokemonList, setPokemonList  ] = useState([]);
  const [ yourFavoritedPokemon, setYourFavoritedPokemon ] = useState([]);

  return (
    <AppContext.Provider
      value={{
        selectedPokemon, setSelectedPokemon,
        fetchedPokemon, setFetchedPokemon,
        pokemonList, setPokemonList, computerPokemon, setComputerPokemon, 
        yourFavoritedPokemon, setYourFavoritedPokemon, 
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}
export default AppProvider;
export { AppContext };
