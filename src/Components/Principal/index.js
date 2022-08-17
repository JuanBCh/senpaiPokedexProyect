import {useState} from "react";
import Header from "./Header";
import Main from "./Main";

function Principal({
  colors,
  images,
  setPokemones,
  changeLanguage,
  language,
  manageInput,
  pokemones,
  input
}) {
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
