import {useState} from "react";
import Filter from "./Filter";
import {Pokemones} from "../../../pokemones";
import {PokemonesEs} from "../../../pokemonesEs";
import "./index.css";

function Header(props) {
  const [language, setLanguage] = useState(["Pokedex", "Search"]);

  const changeLanguage = () => {
    if (language[0] === "Pokedex") {
      setLanguage(["Pokédex", "Buscar"]);
      props.setPokemones(PokemonesEs);
    } else {
      setLanguage(["Pokedex", "Search"]);
      props.setPokemones(Pokemones);
    }
  };

  return (
    <header>
      <img src="/Images/Pokeball.png" alt="Pokeball logo" />
      <h1 onClick={changeLanguage} className="pointer">
        {language[0]}
      </h1>
      <Filter images={props.images} setPokemones={props.setPokemones} />
      <input
        placeholder={`🔍 ${language[1]}`}
        value={props.inputValue}
        onInput={props.onInput}
      />
    </header>
  );
}
export default Header;
