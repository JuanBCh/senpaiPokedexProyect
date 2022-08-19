import "./App.css";
import Principal from "./Components/Principal";
import {Routes, Route} from "react-router-dom";
import PokeProf from "./Components/Secondary";
import {useEffect, useState} from "react";
import Pokemones from "./pokemones";

function App() {
  const [pokemones, setPokemones] = useState([]);
  const [input, setInput] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [prr, setPrr] = useState("");
  const colors = {
    rock: "#B69E31",
    ghost: "#70559B",
    steel: "#B7B9D0",
    water: "#6493EB",
    grass: "#74CB48",
    psychic: "#FB5584",
    normal: "#AAA67F",
    fighting: "#C12239",
    flying: "#A891EC",
    poison: "#A43E9E",
    ground: "#DEC16B",
    bug: "#A7B723",
    ice: "#9AD6DF",
    dark: "#75574C",
    fairy: "#E69EAC",
    fire: "#F57D31",
    electric: "#F9CF30",
    dragon: "#7037FF",
  };
  const images = [
    "/Images/hashtagB.png",
    "/Images/hashtagA.png",
    "/Images/azflechab.png",
    "/Images/azflechaA.png",
  ];
  // console.log(Pokemones());
  // useEffect(() => {
  //   // request http a la api de mozos http://localhost:8088/mozos
  //   fetch("http://localhost:8088/pokemones")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setPokemones(result);
  //     });
  // }, []);
  // useEffect(() => {
  //   if (pokemones !== []) {
  //     setIsLoaded(true);
  //     setPokemones(Pokemones());
  //   } else {
  //     setPrr("");
  //   }
  // }, [prr]);
  const [pokeList, setPokeList] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=151")
      .then((res) => res.json())
      .then((result) => {
        setPokeList(result.results);
        obtenerPokemones(result.results);
      });
  }, []);

  async function obtenerPokemones(lista) {
    const Promesas = lista.map((result) => {
      return fetch(result.url)
        .then((res) => res.json())
        .then((resultados) => {
          return {
            id: resultados.id,
            name: resultados.name,
            img: resultados.sprites.front_default,
            gif: resultados.sprites.front_default,
            shiny: resultados.sprites.front_shiny,
            types: [resultados.types[0].type.name],
            weight: resultados.weight,
            height: resultados.height,
            moves: [resultados.moves[0].move.name],
            description:
              "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
            stats: {
              hp: resultados.stats[0].base_stat,
              atk: resultados.stats[1].base_stat,
              def: resultados.stats[2].base_stat,
              satk: resultados.stats[3].base_stat,
              sdef: resultados.stats[4].base_stat,
              spd: resultados.stats[5].base_stat,
            },
          };
        });
    });
    const datos = await Promise.all(Promesas);
    setPokemones(datos);
    setIsLoaded(true);
  }

  console.log("pokemones: ", pokemones);
  const thePkmn = pokemones.filter((pokemon) => {
    if (input === "") {
      return pokemon;
    } else {
      return pokemon.name.toLowerCase().includes(input.toLowerCase());
    }
  });
  console.log("pokemones filtrados", thePkmn);
  const manageInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Principal
              colors={colors}
              images={images}
              setPokemones={setPokemones}
              manageInput={manageInput}
              pokemones={thePkmn}
              input={input}
              isLoaded={isLoaded}
            />
          }
        />
        <Route
          path="/pokemon/:name"
          element={
            <PokeProf
              colors={colors}
              pokemones={thePkmn}
              setPokemones={setPokemones}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
