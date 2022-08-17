import "./Pokemon.css";

function Pokemon({id, img, name, color, onClick}) {
  return (
    <div
      className="pokemon pointer"
      style={{border: `2px solid ${color}`}}
      onClick={onClick}>
      <p style={{color: color}}>#{id}</p>
      <img src={img} alt={`Image of ${name}`} />
      <h3 className="PokemonNameIndex" style={{backgroundColor: color}}>
        {name}
      </h3>
    </div>
  );
}
export default Pokemon;
