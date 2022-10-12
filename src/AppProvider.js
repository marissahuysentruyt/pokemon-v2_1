import React, { useState } from 'react';

const AppContext = React.createContext({});
const AppProvider = (props) => {
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [ fetchedPokemon, setFetchedPokemon ] = useState({});


  return (
    <AppContext.Provider value={{ selectedPokemon, setSelectedPokemon, fetchedPokemon, setFetchedPokemon }} >
      {props.children}
    </AppContext.Provider>
  )
}
export default AppProvider;
export { AppContext };
