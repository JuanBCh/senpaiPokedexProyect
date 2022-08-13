import {useEffect, useState} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import {Pokemones} from "../../pokemones";
import Top from "./Top";
import "./index.css";

function PokeProf({colors, pokemones}) {
  const [poke, setPoke] = useState(pokemones);
  const [pokeType, setPokeType] = useState(Pokemones);
  const [index, setIndex] = useState(null);
  const [img, setImg] = useState(null);
  const {name} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIndex(() => {
      const Index = pokemones.findIndex((i) => i.name === name);
      return Index;
    });
    setPoke((prevSt) => {
      prevSt = pokemones;
      const newSt = prevSt.filter((i) => i.name === name)[0];
      const random = Math.floor(Math.random() * 10);
      console.log(newSt);
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
      console.log(newSt.types[0]);
      return newSt.types[0];
    });
  }, [name]);

  //El problema con el ultimo pokemon del array, que no se renderiza, es problema del "to" del link

  return (
    <div className="secDiv" style={{backgroundColor: colors[pokeType]}}>
      {console.log(pokemones)}
      {console.log(index)}
      <Top name={poke.name} id={poke.id} />
      <img src={img} />
      {index === 8 ? null : (
        <Link to={`/pokemon/${pokemones[index + 1].name}`}>
          <img src={"/Images/new-arrow-left.png"} />
        </Link>
      )}
      <p>{poke.description}</p>
    </div>
  );
}
export default PokeProf;
