import "./App.css";
import Principal from "./Components/Principal";

function App() {
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

  return (
    <div className="App">
      <Principal colors={colors} />
    </div>
  );
}

export default App;
