import Header from "./Header";
import Main from "./Main";

function Principal({
  colors,
  images,
  setPokemones,
  manageInput,
  pokemones,
  input,
  isLoaded,
}) {
  return (
    <>
      <Header
        images={images}
        setPokemones={setPokemones}
        inputValue={input}
        onInput={manageInput}
      />
      {!isLoaded ? (
        <p>Cargando</p>
      ) : (
        <Main colors={colors} pokemones={pokemones} />
      )}
    </>
  );
}
export default Principal;
