const PokemonCard = ({pokemon, onSelect, name}) => {
    return (
      <>
        <label className="input-item capitalize">
        <h2>{pokemon.name}</h2>
          <input type="radio" name={name} value={pokemon.name} onChange={onSelect}/>
          <img className="input-image" src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h3 className="item-character-info__hp">{pokemon?.base_experience} HP</h3>
        </label>
      </>
)};

export default PokemonCard;

