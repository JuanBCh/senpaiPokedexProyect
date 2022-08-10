import Header from "./Header";
import Main from "./Main";

function Principal({colors}) {
  return (
    <>
      <Header />
      <Main colors={colors} />
    </>
  );
}
export default Principal;
