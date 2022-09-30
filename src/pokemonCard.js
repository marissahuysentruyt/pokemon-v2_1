import React from 'react';
import '../src/css/pokemonCard.css';
// import Progress-Bar from './progress-bar';

class PokemonCard extends React.Component {
  render () {
    return (
      <div> 
        {/* all React is expecting a "single" thing to return. wrap it in a div */}
{/* //         {/* {
//           if this.state is true. (state hasn't been determined) */}
{/* //         <section className='card'>
//           <header className='card__header'>
//             <p className='header__name'>
//               Charizard
//             </p>
//             <div className='header__progress-bar'>
//             // progress bar is being informed by the state of the PokemonCard
//               <Progress-Bar /> */}
{/* //             </div> */}

{/* //           </header> */}
{/* //         </section> */}
      </div>
    )
  }
}

// this is all that's needed to get everything above on the webpage. 
function App() {
  return (
    <div className='App'>
      <PokemonCard />
    </div>
  );
};

// allows this to be importable/used in other files
export default PokemonCard;

