import {useState} from "react";

function Filter({images, setPokemones}) {
  const [imag, setImag] = useState(images[0]);

  function OrderByNameMas() {
    setPokemones((prevSt) => {
      const newSt = [...prevSt].sort((a, b) => a.name.localeCompare(b.name));
      return newSt;
    });
  }
  function OrderByNameMenos() {
    setPokemones((prevSt) => {
      const newSt = [...prevSt].sort((a, b) => b.name.localeCompare(a.name));
      return newSt;
    });
  }
  function OrderByIdMas() {
    setPokemones((prevSt) => {
      const newSt = [...prevSt].sort((a, b) => a.id - b.id);
      return newSt;
    });
  }
  function OrderByIdMenos() {
    setPokemones((prevSt) => {
      const newSt = [...prevSt].sort((a, b) => b.id - a.id);
      return newSt;
    });
  }

  const order = () => {
    setImag((prevSt) => {
      if (prevSt === images[0]) {
        OrderByIdMenos();
        return (prevSt = images[1]);
      }
      if (prevSt === images[1]) {
        OrderByNameMas();
        return (prevSt = images[2]);
      }
      if (prevSt === images[2]) {
        OrderByNameMenos();
        return (prevSt = images[3]);
      }
      if (prevSt === images[3]) {
        OrderByIdMas();
        return (prevSt = images[0]);
      }
    });
  };

  return <img className="filter pointer" src={imag} onClick={order} />;
}
export default Filter;
