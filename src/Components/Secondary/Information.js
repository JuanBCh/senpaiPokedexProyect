import "./Information.css";

function Information({
  types,
  weight,
  height,
  moves,
  description,
  stats,
  colors,
  typeColor,
}) {
  //types y moves son arrays. stats es un objeto
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
      <h4 className="about" style={{color: colors[typeColor]}}>
        About
      </h4>
      <div className="info infoGrid">
        <div className="infoMiniGrid1">
        <img className="imgGrid" src={"/Images/Weight.svg"} />
        <h5 className="gridContent">{weight}Kg</h5>
        <p className="gridText">Weight</p>
        </div>
        <div className="infoMiniGrid2">
        <img className="imgGrid" src={"/Images/Height.svg"} />
        <h5 className="gridContent" >{height}m</h5>
        <p className="gridText">Height</p>
        </div>
        <div>
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
      <h4 className="stats" style={{color: colors[typeColor]}}>
        Base Stats
      </h4>
    </div>
  );
}
export default Information;
