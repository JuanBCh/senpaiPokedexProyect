import {useState} from "react";
import Header from "./Header";
import Main from "./Main";

function Principal({
  colors,
  images,
  setPokemones,
  pokemones,
  changeLanguage,
  language,
}) {
  const [input, setInput] = useState("");

  const manageInput = (e) => {
    setInput(e.target.value);
    setPokemones((pkmn) => {
      const thePkmn = pkmn.filter((pokemon) => {
        console.log(pokemon);
        if (input === "") {
          console.log("Input VacIO");
          return pokemon;
        } else {
          return pokemon.name.toLowerCase().includes(input);
        }
      });
      return thePkmn;
    });
  };
  return (
    <>
      <Header
        images={images}
        setPokemones={setPokemones}
        inputValue={input}
        onInput={manageInput}
        changeLanguage={changeLanguage}
        language={language}
      />
      <Main colors={colors} pokemones={pokemones} />
    </>
  );
}
export default Principal;
