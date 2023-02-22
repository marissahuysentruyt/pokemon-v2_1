// import { useContext } from 'react';
// import { AppContext } from '../AppProvider';

const PokemonCardListItems = () => {
  // const { pokemonList } = useContext(AppContext);
  
  return (
    // pokemonList.map((pokemon) =>
    //   <li key={pokemon.id} className="grid-list-all__item">
    //     <ul className="item-character-info">
    //       <li className="item-character-info__sprite">
    //         <img
    //           src={pokemon?.sprites.front_default}
    //           alt={pokemon?.name}
    //         />
    //       </li>
    //       <li className="item-character-info__name">
    //         <h2>{pokemon.name}</h2>
            <button type="button" className="item-character-info__favorite" id="heart">
              <svg width="45" height="42" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.5801 23.1624L22.0544 38.688L6.49808 23.1317C3.72761 20.3612 2 17.3638 2 13.5107C2 6.93151 6.6921 2.01074 12 2.01074C15.3974 2.01074 18.493 3.9796 20.331 7.15356L22.0636 10.1453L23.7934 7.15201C25.6307 3.97268 28.7291 2 32.1298 2C37.4377 2 42.1298 6.92076 42.1298 13.5C42.1298 17.319 39.9139 20.7591 37.5801 23.1624Z" stroke="#CB0F75" strokeWidth="4"/>
              </svg>
            </button>
    //       </li>
    //       <li>
    //       <h3 className="item-character-info__hp">{pokemon?.base_experience} HP</h3>
    //       </li>
    //     </ul>
    //   </li>
    // )
  )
}

export default PokemonCardListItems;

