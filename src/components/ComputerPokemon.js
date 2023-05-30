import { GetOnePokemon } from './fetchPokemon';
import { AppContext } from '../AppProvider';
import { useContext, useEffect, useCallback } from 'react';

export const ComputerPokemon = () => {
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
  }, []);


  return computerPokemon ? (
    <>
      <h2 className="capitalize">{computerPokemon.name}</h2>
      <img className="featured__image" src={ computerPokemon.sprites.front_default } alt={computerPokemon.name} />
    </>
  ) : <p>loading opponent...</p>
  
}
