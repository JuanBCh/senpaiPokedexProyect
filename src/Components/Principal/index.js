import {useEffect, useState} from "react";
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
  input,
  imag,
  setImag,
}) {
  useEffect(() => {
    document.title = "Pokedex";
  }, []);
  return (
    <>
      <Header
        images={images}
        setPokemones={setPokemones}
        inputValue={input}
        onInput={manageInput}
        changeLanguage={changeLanguage}
        language={language}
        imag={imag}
        setImag={setImag}
      />
      <Main colors={colors} pokemones={pokemones} />
    </>
  );
}
export default Principal;
