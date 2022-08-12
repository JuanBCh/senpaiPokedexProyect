import {useState} from "react";
import Header from "./Header";
import Main from "./Main";

function Principal({colors, images, setPokemones, pokemones}) {
  const [input, setInput] = useState("");

  const manageInput = (e) => {
    setInput(e.target.value);
    // setPokemones((prevSt) => {
    //   const newSt = prevSt.map((pkmn) => {
    //     const thePkmn = pkmn.name.match(input);
    //     console.log(thePkmn);
    //     if (thePkmn !== null) {
    //       return thePkmn.input;
    //     }
    //     return "";
    //   });
    //   console.log(newSt);
    //   return newSt.filter((wrd) => wrd !== "")[0];
    // });
  };
  return (
    <>
      <Header
        images={images}
        setPokemones={setPokemones}
        inputValue={input}
        onInput={manageInput}
      />
      <Main colors={colors} pokemones={pokemones} />
    </>
  );
}
export default Principal;
