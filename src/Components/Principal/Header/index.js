import Filter from "./Filter";
import "./index.css";

function Header(props) {
  return (
    <header>
      <img src="/Images/Pokeball.png" alt="Pokeball logo" />
      <h1 className="pointer" onClick={props.onClick}>
        Pokedex
      </h1>
      <Filter images={props.images} setPokemones={props.setPokemones} />
      <input
        placeholder="🔍 Search"
        value={props.inputValue}
        onInput={props.onInput}
      />
    </header>
  );
}
export default Header;
