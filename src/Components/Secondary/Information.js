import "./Information.css";

function Information({
  types,
  weight,
  height,
  moves,
  description,
  stats,
  colors,
  color,
}) {
  //types y moves son arrays. stats es un objeto
  console.log(color);
  return (
    <div className="information">
      <div className="infoTypes">
        {types &&
          types.map((type, i) => {
            return (
              <span
                id={`id${i}`}
                key={i}
                style={{backgroundColor: colors[type]}}>
                {type}
              </span>
            );
          })}
      </div>
      <h4 className="about" style={{color: color}}>
        About
      </h4>
      <div className="info">
        <img src={"/Images/Weight.svg"} />
        <h5>{weight}Kg</h5>
        <p>Weight</p>
        <img src={"/Images/Height.svg"} />
        <h5>{height}m</h5>
        <div>
          <p>Height</p>
          {moves &&
            moves.map((move, i) => {
              return (
                <p id={`id${i}`} key={i}>
                  {move}
                </p>
              );
            })}
          <p>Moves</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <h4 className="stats" style={{color: color}}>
        Base Stats
      </h4>
    </div>
  );
}
export default Information;
