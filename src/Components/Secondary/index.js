import {useEffect, useState} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import {Pokemones} from "../../pokemones";
import "./index.css";
import Top from "./Top";
import Information from "./Information";

function PokeProf({colors, pokemones}) {
  const [poke, setPoke] = useState(pokemones);
  const [pokeType, setPokeType] = useState(Pokemones);
  const [pokeStats, setPokeStats] = useState(Pokemones);
  const [index, setIndex] = useState(null);
  const [img, setImg] = useState(null);
  const {name} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `${name}`;
    // document.icon = `/Images/${name}.png`;
    setIndex(() => {
      const Index = pokemones.findIndex((i) => i.name === name);
      return Index;
    });
    setPoke((prevSt) => {
      prevSt = pokemones;
      const newSt = prevSt.filter((i) => i.name === name)[0];
      const random = Math.floor(Math.random() * 10);
      if (random > 1) {
        setImg(newSt.gif);
      } else {
        setImg(newSt.shiny);
      }
      return newSt;
    });
    setPokeType((prevSt) => {
      prevSt = Pokemones;
      const newSt = prevSt.filter((i) => i.name === name)[0];
      return newSt.types[0];
    });
    setPokeStats((prevSt) => {
      prevSt = Pokemones;
      const newSt = prevSt.filter((i) => i.name === name)[0];
      return newSt.stats;
    });
  }, [name]);

  //El problema con el ultimo pokemon del array, que no se renderiza, es problema del "to" del link
  return (
    <div className="secDiv" style={{backgroundColor: colors[pokeType]}}>
      <Top name={poke.name} id={poke.id} />
      <div className="pokeArrows">
        {index === 0 ? null : (
          <img
            className="pointer thePointer"
            onClick={() => navigate(`/pokemon/${pokemones[index - 1].name}`)}
            src={"/Images/new-arrow-left.png"}
          />
        )}
        <img className="pokeMainImg" src={img} />
        {index === pokemones.length - 1 ? null : (
          <img
            className="pointer thePointer"
            onClick={() => navigate(`/pokemon/${pokemones[index + 1].name}`)}
            src={"/Images/new-arrow-right.png"}
          />
        )}
      </div>

      <Information
        types={poke.types}
        weight={poke.weight}
        height={poke.height}
        moves={poke.moves}
        description={poke.description}
        stats={pokeStats}
        colors={colors}
        typeColor={pokeType}
      />
    </div>
  );
}
export default PokeProf;
