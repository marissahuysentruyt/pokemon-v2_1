import { AppContext } from "../AppProvider";
import { useContext, useCallback, useEffect } from "react";
import fetchPokemon from "./fetchPokemon";
import { HashLink } from "react-router-hash-link";

const PokemonList = () => {
  const numberOfOriginalPokemon = 151;
  const { pokemonList, setPokemonList } = useContext(AppContext);

   // get all the pokemon available for the game
   const getAllPokemon = useCallback(async () => {
    try {
    const pokemonArray = [];
    for(let i = 1; i <= numberOfOriginalPokemon; i++) {
      const newPokemon = await fetchPokemon(i)
      pokemonArray.push(newPokemon);
    }
    setPokemonList(pokemonArray);
    }
    catch (e) {
      console.log('something went wrong');
    }

  }, [setPokemonList]);

  useEffect(() => {
    getAllPokemon();
  }, [getAllPokemon]);

  const pokemonCardListItems = pokemonList.map((pokemon) =>
    <li key={pokemon?.id} className="grid-list-all__item">
      <ul className="item-character-info">
        <li className="item-character-info__sprite">
          <img
            src={pokemon?.sprites.front_default}
            alt={pokemon?.name}
          />
        </li>
        <li className="item-character-info__name">
          <h2>{pokemon?.name}</h2>
          <button type="button" className="item-character-info__favorite" id="heart">
            <svg width="45" height="42" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.0544 40.1022L5.79097 23.8388C2.90574 20.9536 1 17.7167 1 13.5107C1 6.4932 6.03234 1.01074 12 1.01074C15.8058 1.01074 19.207 3.2171 21.1964 6.65243L22.0627 8.14831L22.9276 6.65165C24.9162 3.21064 28.3203 1 32.1298 1C38.0974 1 43.1298 6.48246 43.1298 13.5C43.1298 17.6988 40.7072 21.3793 38.2923 23.8644L22.0544 40.1022Z" stroke="#CB0F75" strokeWidth="2"/>
            </svg>
          </button>
        </li>
        <li>
        <h3 className="item-character-info__hp">{pokemon?.base_experience} HP</h3>
        </li>
      </ul>
    </li>
  )

  // console.log(pokemonCardListItems);

  return (
    <>
      <section className="pokemon-list">
        <h1 id="to-top-of-list">Original 151 Pokemon</h1>
        <ul className="grid-list-all">
          {pokemonCardListItems}
        </ul>

        <HashLink to="#to-top-of-list" className="back-to-top">☝️ Back to Top</HashLink>
      </section>
    </>
  )
}

export default PokemonList;
