import {useEffect, useState} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import {Pokemones} from "../../pokemones";
import Top from "./Top";
import "./index.css";

function PokeProf({colors, pokemones}) {
  const [poke, setPoke] = useState(pokemones);
  const [pokeType, setPokeType] = useState(Pokemones);
  const [index, setIndex] = useState(null);
  const {name} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIndex(() => {
      const Index = pokemones.findIndex((i) => i.name === name);
      return Index;
    });
    setPoke((prevSt) => {
      const newSt = prevSt.filter((i) => i.name === name)[0];
      return newSt;
    });
    // setPokeType((prevSt) => {
    //   const newSt = prevSt.filter((i) => i.name === name)[0];
    //   return newSt.types[0];
    // });
    console.log("Cargo!");
  }, [name]);

  return (
    <Link to={`/pokemon/${pokemones[index + 1].name}`}>{name}</Link>
    // <div className="secDiv" style={{backgroundColor: colors[pokeType]}}>
    //   <Top name={poke.name} id={poke.id} />
    //   <img src={poke.img} />
    //   <Link to={`/pokemon/${pokemones[index + 1].name}`}>
    //     <img src={"/Images/new-arrow-left.png"} />
    //   </Link>
    // </div>
  );
}
export default PokeProf;
