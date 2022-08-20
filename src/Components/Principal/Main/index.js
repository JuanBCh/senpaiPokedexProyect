import Pokemon from "./Pokemon";
import {Pokemones} from "../../../pokemones";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./index.css";

function Main({colors, pokemones}) {
  const navigate = useNavigate();
  return (
    <main className="principal">
      {pokemones.map((poke, i) => {
        return (
          <Pokemon
            key={i}
            id={poke.id}
            name={poke.name}
            img={poke.img}
            color={colors[poke.types[0]]}
            onClick={() => navigate(`/pokemon/${poke.name}`)} //aca va a ir la ruta para el pokemon en cuestion
          />
        );
      })}
    </main>
  );
}
export default Main;
