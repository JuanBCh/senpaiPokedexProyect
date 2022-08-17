import ProgressBar from "@ramonak/react-progress-bar";
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
          <h5 className="gridContent">{height}m</h5>
          <p className="gridText">Height</p>
        </div>
        <div className="infoMiniGrid3 ">
          {moves &&
            moves.map((move, i) => {
              return (
                <p id={`id${i}`} key={i}>
                  {move}
                </p>
              );
            })}
          <p className="gridText">Moves</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <h4 className="stats" style={{color: colors[typeColor]}}>
        Base Stats
      </h4>
      <div className="statDiv">
        <label style={{color: colors[typeColor]}} for="stathp">
          HP
        </label>
        <p>{stats.hp}</p>
        <ProgressBar
          className="progressBar"
          completed={stats.hp}
          maxCompleted="250"
          bgColor={colors[typeColor]}
          baseBgColor={`${colors[typeColor]}55`}
          width="200px"
          height="5px"
          labelSize="0"
        />
      </div>
      <div className="statDiv">
        <label style={{color: colors[typeColor]}} for="statatk">
          ATK
        </label>
        <p>{stats.atk}</p>
        <ProgressBar
          className="progressBar"
          completed={stats.atk}
          bgColor={colors[typeColor]}
          baseBgColor={`${colors[typeColor]}55`}
          width="200px"
          height="5px"
          labelSize="0"
          maxCompleted="250"
        />
      </div>
      <div className="statDiv">
        <label style={{color: colors[typeColor]}} for="statdef">
          DEF
        </label>
        <p>{stats.def}</p>
        <ProgressBar
          className="progressBar"
          completed={stats.def}
          maxCompleted="250"
          bgColor={colors[typeColor]}
          baseBgColor={`${colors[typeColor]}55`}
          width="200px"
          height="5px"
          labelSize="0"
        />
      </div>
      <div className="statDiv">
        <label style={{color: colors[typeColor]}} for="statsatk">
          SATK
        </label>
        <p>{stats.satk}</p>
        <ProgressBar
          className="progressBar"
          completed={stats.satk}
          maxCompleted="250"
          bgColor={colors[typeColor]}
          baseBgColor={`${colors[typeColor]}55`}
          width="200px"
          height="5px"
          labelSize="0"
        />
      </div>
      <div className="statDiv">
        <label style={{color: colors[typeColor]}} for="statsdef">
          SDEF
        </label>
        <p>{stats.sdef}</p>
        <ProgressBar
          className="progressBar"
          completed={stats.sdef}
          maxCompleted="250"
          bgColor={colors[typeColor]}
          baseBgColor={`${colors[typeColor]}55`}
          width="200px"
          height="5px"
          labelSize="0"
        />
      </div>
      <div className="statDiv">
        <label style={{color: colors[typeColor]}} for="statspd">
          SPD
        </label>
        <p>{stats.spd}</p>
        <ProgressBar
          className="progressBar"
          completed={stats.spd}
          maxCompleted="250"
          bgColor={colors[typeColor]}
          baseBgColor={`${colors[typeColor]}55`}
          width="200px"
          height="5px"
          labelSize="0"
        />
      </div>
    </div>
  );
}
export default Information;
