import {useState} from "react";
import Filter from "./Filter";
import "./index.css";

function Header(props) {
  return (
    <header>
      <img src="/Images/Pokeball.png" alt="Pokeball logo" />
      <h1 onClick={props.changeLanguage} className="pointer">
        {props.language[0]}
      </h1>
      <Filter images={props.images} setPokemones={props.setPokemones} />
      <input
        placeholder={`🔍 ${props.language[1]}`}
        value={props.inputValue}
        onInput={props.onInput}
      />
    </header>
  );
}
export default Header;
