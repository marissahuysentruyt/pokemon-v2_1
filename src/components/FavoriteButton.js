import { useContext, useEffect } from "react";
import { AppContext } from "../AppProvider";

export const FavoriteButton = ({pokemon, isFavoritePokemon, pokemonList, setIsFavoritePokemon}) => {
  let { yourFavoritedPokemon } = useContext(AppContext);
  // setYourFavoritedPokemon crashes the browser every time I try to use it

  // because the pokemonList is coming in as batches of 12, using the id doesn't work. The array is only up to 11, while the index numbers go up to 151. divideIndexNumberByTwelves addresses this
  const divideIndexNumberByTwelves = (number) => {
    return number % 12;
  }

  const toggleFavoriteStatus = () => {
    isFavoritePokemon= !isFavoritePokemon;
  };

  // TODO: is there a better way other than .push?
  const addFavorites = (incomingList, pokemon) => {
    incomingList.push(pokemon);
    // using the spread operator either crashes the browser, or doesn't actually add the object
    // incomingList = [...incomingList, {...pokemon}] ;
    console.log('added', incomingList);
    return incomingList;
  }

  // TODO: this remove function doesn't work
  const removeFavorites = (incomingList, pokemon, index) => {
    incomingList.forEach((item) => {
      if (item.id === pokemon.id) {
        incomingList.splice(index, 1, item);

        return incomingList
    }})
      // console.log(incomingList[index - 1].id, 'matched')
      return incomingList;
    }
    // incomingList = incomingList.filter((item) => item !== pokemon);
    // console.log('removed', incomingList);

  // const compareArrays = (currentFavoritesArray, incomingList) => {
  //   look at the current state of yourFavoritedPokemon Array. 
  //   for each pokemon in that Array, compare it to each pokemon in the incoming pokemonList 
  //   if there's a match, that pokemon has to be set as a favorite (setIsFavoritePokemon)
  //   return the status of each pokemon of the incoming pokemonList, so their hearts are turned on/off
  // }

  useEffect(() => {
    // TODO: on load or on refresh, we should run the comparison function to see what pokemon need to be set as favorites
    // setYourFavoritedPokemon(compareArrays);
    // setYourFavoritedPokemon(removeFavorites(pokemonList, pokemon));
    // console.log(yourFavoritedPokemon, 'useEffect');
  }, [])

  const svg = document.querySelectorAll('svg');

  return pokemon ? (
    <>
      <button id={pokemon.id} type="button" className="item-character-info__favorite" 
        onClick={() => {
          toggleFavoriteStatus(pokemon);
          if (isFavoritePokemon) {
            addFavorites(yourFavoritedPokemon, pokemon);
          } else {
            removeFavorites(yourFavoritedPokemon, pokemon, pokemon.id);
          };
          isFavoritePokemon ? svg[divideIndexNumberByTwelves(pokemon.id - 1)].classList.add('favorite') : svg[divideIndexNumberByTwelves(pokemon.id - 1)].classList.remove('favorite');
        }}>
        <svg width="45" height="42" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M37.5801 23.1624L22.0544 38.688L6.49808 23.1317C3.72761 20.3612 2 17.3638 2 13.5107C2 6.93151 6.6921 2.01074 12 2.01074C15.3974 2.01074 18.493 3.9796 20.331 7.15356L22.0636 10.1453L23.7934 7.15201C25.6307 3.97268 28.7291 2 32.1298 2C37.4377 2 42.1298 6.92076 42.1298 13.5C42.1298 17.319 39.9139 20.7591 37.5801 23.1624Z" stroke="#CB0F75" strokeWidth="4"/>
        </svg>
      </button>
    </>
  ) : <p>Still loading...</p>
}
