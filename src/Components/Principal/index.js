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
  onClick,
}) {
  return (
    <>
      <Header
        images={images}
        setPokemones={setPokemones}
        inputValue={input}
        onInput={manageInput}
        onClick={onClick}
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
