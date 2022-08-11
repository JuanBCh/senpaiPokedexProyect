import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Pokemones} from "../../pokemones";
import Top from "./Top";

function PokeProf({colors}) {
  const [poke, setPoke] = useState(Pokemones);
  const [pokeType, setPokeType] = useState(Pokemones);
  const {name} = useParams();

  useEffect(() => {
    setPoke((prevSt) => {
      const newSt = prevSt.filter((i) => i.name === name)[0];
      return newSt;
    });
    setPokeType((prevSt) => {
      const newSt = prevSt.filter((i) => i.name === name)[0];
      return newSt.types[0];
    });
  }, []);

  return (
    <div style={{backgroundColor: colors[pokeType]}}>
      <Top name={poke.name} id={poke.id} />
      <img src={poke.img} />
      <img src={"/Images/arrow-left.svg"} />
    </div>
  );
}
export default PokeProf;
