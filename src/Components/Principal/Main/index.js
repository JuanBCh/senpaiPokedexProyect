import Pokemon from "./Pokemon";
import {Pokemones} from "../../../pokemones";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./index.css";

function Main({colors}) {
  const [pokeList, setPokeList] = useState(Pokemones);
  const navigate = useNavigate();
  return (
    <main className="principal">
      {pokeList.map((poke) => {
        return (
          <Pokemon
            id={poke.id}
            name={poke.name}
            img={poke.img}
            color={colors[poke.types[0]]}
            onClick={() => navigate(`/${poke.name}`)} //aca va a ir la ruta para el pokemon en cuestion
          />
        );
      })}
    </main>
  );
}
export default Main;
