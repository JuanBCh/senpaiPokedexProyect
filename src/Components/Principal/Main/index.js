import Pokemon from "./Pokemon";
import {Pokemones} from "../../../pokemones";
import {useState} from "react";

function Main({colors}) {
  const [pokeList, setPokeList] = useState(Pokemones);
  return (
    <main>
      {pokeList.map((poke) => {
        return (
          <Pokemon
            id={poke.id}
            name={poke.name}
            img={poke.img}
            color={colors[poke.types[0]]}
            onClick=""//aca va a ir la ruta para el pokemon en cuestion
          />
        );
      })}
    </main>
  );
}
export default Main;
