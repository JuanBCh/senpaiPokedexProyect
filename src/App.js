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
  const images = [
    "/Images/hashtagB.png",
    "/Images/hashtagA.png",
    "/Images/azflechab.png",
    "/Images/azflechaA.png",
  ];

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
              pokemones={pokemones}
            />
          }
        />
        <Route
          path="/:name"
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
