export const ComputerPokemon = ({computerPokemon}) => {
  return computerPokemon ? (
    <>
      <h2 className="capitalize">{computerPokemon.name}</h2>
      <img className="featured__image" src={ computerPokemon.sprites.front_default } alt={computerPokemon.name} />
    </>
  ) : <p>loading opponent...</p>
}
