import { useState } from "react";
// import { AppContext } from "../AppProvider";
import { FavoriteButton } from "./FavoriteButton";

export const PokemonListItems = ({ pokemonList }) => {
  const [ pokemonPromiseResults, setPokemonPromiseResults ] = useState([]);
  const [ isFavoritePokemon, setIsFavoritePokemon ] = useState(false);
  // const { yourFavoritedPokemon } = useContext(AppContext);

  const pokemonPromise = Promise.resolve(pokemonList);
  
  async function pokemonMap() {
    try {
      const pokemonResults = await pokemonPromise;
      // console.log(pokemonResults, 'inside pokemonMap');
      setPokemonPromiseResults(pokemonResults);
      return pokemonResults;
    } catch (error) {
      console.log(error);
    }
  }

  pokemonMap();

  return (
    <>
      {pokemonPromiseResults.map((pokemon, i) => (
        <li key={pokemon.id} className="grid-list-all__item">
          <ul className="item-character-info">
            <li className="item-character-info__sprite">
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </li> 
            <li className="item-character-info__name">
              <h2>{pokemon.name}</h2>
              <FavoriteButton pokemon={pokemon} isFavoritePokemon={isFavoritePokemon} setIsFavoritePokemon={setIsFavoritePokemon} pokemonList={pokemonPromiseResults}/>
            </li>
            <li>
              <h3 className="item-character-info__hp">{pokemon.base_experience} HP</h3>
            </li>
          </ul>
        </li>
      ))}
    </>
  )
}
