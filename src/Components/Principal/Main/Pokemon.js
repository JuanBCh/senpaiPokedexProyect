import "./Pokemon.css";

function Pokemon({id, img, name, color, onClick}) {
  return (
    <div
      className="pokemon"
      style={{border: `2px solid ${color}`}}
      onClick={onClick}>
      <p style={{color: color}}>#{id}</p>
      <img src={img} alt={`Image of ${name}`} />
      <h3 style={{backgroundColor: color}}>{name}</h3>
    </div>
  );
}
export default Pokemon;