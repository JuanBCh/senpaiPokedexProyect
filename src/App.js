import "./App.css";
import Principal from "./Components/Principal";
import {Routes, Route} from "react-router-dom";
import PokeProf from "./Components/Secondary";
import {useEffect, useState} from "react";
import {Pokemones} from "./pokemones";

function App() {
  const [pokemones, setPokemones] = useState(Pokemones);
  const colors = {
    Rock: "#B69E31",
    Ghost: "#70559B",
    Steel: "#B7B9D0",
    Water: "#6493EB",
    Grass: "#74CB48",
    Psychic: "#FB5584",
    Normal: "#AAA67F",
    Fighting: "#C12239",
    Flying: "#A891EC",
    Poison: "#A43E9E",
    Ground: "#DEC16B",
    Bug: "#A7B723",
    Ice: "#9AD6DF",
    Dark: "#75574C",
    Fairy: "#E69EAC",
    Fire: "#F57D31",
    Electric: "#F9CF30",
    Dragon: "#7037FF",
  };
  const colores = {
    Roca: "#B69E31",
    Fantasma: "#70559B",
    Acero: "#B7B9D0",
    Agua: "#6493EB",
    Planta: "#74CB48",
    Psiquico: "#FB5584",
    Normal: "#AAA67F",
    Lucha: "#C12239",
    Volador: "#A891EC",
    Veneno: "#A43E9E",
    Tierra: "#DEC16B",
    Insecto: "#A7B723",
    Hielo: "#9AD6DF",
    Siniestro: "#75574C",
    Ada: "#E69EAC",
    Fuego: "#F57D31",
    Electrico: "#F9CF30",
    Dragon: "#7037FF",
  };
  const [color, setColor] = useState(colors);
  const images = [
    "/Images/hashtagB.png",
    "/Images/hashtagA.png",
    "/Images/azflechab.png",
    "/Images/azflechaA.png",
  ];
  useEffect(() => {
    if (pokemones[0].language === "es") {
      setColor(colores);
    } else {
      setColor(colors);
    }
  }, [<Principal />]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Principal
              colors={color}
              images={images}
              setPokemones={setPokemones}
              pokemones={pokemones}
            />
          }
        />
        <Route
          path="/pokemon/:name"
          element={
            <PokeProf
              colors={colors}
              pokemones={pokemones}
              setPokemones={setPokemones}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
