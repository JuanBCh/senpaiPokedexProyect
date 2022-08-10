import Filter from "./Filter";
import "./index.css";

function Header(props) {
  return (
    <header>
      <img src="/Images/Pokeball.png" alt="Pokeball logo" />
      <h1>Pokedex</h1>
      <Filter />
      <input
        placeholder="🔍 Search"
        value={props.inputValue}
        onInput={props.onInput}
      />
    </header>
  );
}
export default Header;
