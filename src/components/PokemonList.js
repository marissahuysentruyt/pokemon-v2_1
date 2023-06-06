import HomePageButton from "./HomePageButton";
import { HashLink } from "react-router-hash-link";
import PokemonLoader from "./PokemonLoader";
import { PokemonListItems } from "./PokemonListItems";
import { useState } from "react";
import { GetBatchOfPokemon } from "./fetchPokemon";

const PokemonList = () => {
  const [ limitNumber, setLimitNumber ] = useState(12);
  const [ indexNumber, setIndexNumber ] = useState(-1);
  const [ nextButtonClicked, setNextButtonClicked ] = useState(false);
  const [ previousButtonClicked, setPreviousButtonClicked ] = useState(true);
  const [ pokemonLoaded, setPokemonLoaded ] = useState(false);

  const previousPage = (limitNumber, indexNumber) => {
    setPokemonLoaded(false);
    const minIndexNumber = -1;
    if(indexNumber === 143) {
      setIndexNumber(indexNumber -12);
      setLimitNumber(12);
      setPreviousButtonClicked(true); 
    }
    if(indexNumber === 11) {
      setNextButtonClicked(false);
    }
    if((indexNumber - 12) >= minIndexNumber) {
      setIndexNumber(indexNumber - 12);
    }
  }

  const nextPage = (limitNumber, indexNumber) => {
    setNextButtonClicked(true);
    setPokemonLoaded(false);
    const maxIndexNumber = 150;
    if(indexNumber === 131) {
      const remainingCharacters = 150 - (indexNumber + 12)
      setLimitNumber(remainingCharacters);
      setPreviousButtonClicked(false);
    }
    if(indexNumber === 143) {
      alert("that's all our pokemon 😢");
    }
    if((indexNumber + 12) < maxIndexNumber) {
      setIndexNumber(indexNumber + 12);
    } 
  }
  
  const getPokemon = async (limitNumber, indexNumber) => {
    const pokemonResponse = await GetBatchOfPokemon(limitNumber, indexNumber);
    // console.log(pokemonResponse)
    setPokemonLoaded(true);
    // console.log(pokemonLoaded)
    return pokemonResponse;
  }

  return (
    <>
      <section className="pokemon-list">
        <HomePageButton />
        <h1 id="to-top-of-list">Original 151 Pokemon</h1>
        <ul className="grid-list-all">
          <PokemonLoader limitNumber={limitNumber} indexNumber={indexNumber} 
          >
            <PokemonListItems pokemonList={getPokemon(limitNumber, indexNumber)}/>
          </PokemonLoader>
        </ul>
        {pokemonLoaded && 
          <div className="pokemon-list__buttons-link">
            {nextButtonClicked && 
              <button type="button" className="pokemon-list__previous-button" onClick={() => previousPage(limitNumber, indexNumber)}>
              See Last Batch of Pokemon
              </button>
            }
            {previousButtonClicked && 
              <button type="button" className="pokemon-list__next-button" onClick={() => nextPage(limitNumber, indexNumber)}>
              See Next Batch of Pokemon
              </button>
            }
            <HashLink to="#to-top-of-list" className="back-to-top">☝️ Back to Top</HashLink>
          </div>
        }
        {!pokemonLoaded && <p>Checking Pokedex...</p>}
      </section>
    </>
  )
}

export default PokemonList;
