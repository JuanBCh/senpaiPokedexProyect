import {useState} from "react";
import {Pokemones} from "../../../pokemones";

function Filter(props) {
  const [funct, setFunct] = useState(OrderByNameMas());

  const order = () => {
    funct();
    setFunct((f) => {
      if (f === OrderByNameMas) {
        return OrderByNameMenos;
      }
      if (f === OrderByNameMenos) {
        return OrderByIdMas;
      }
      if (f === OrderByIdMas) {
        return OrderByIdMenos;
      }
      if (f === OrderByIdMenos) {
        return OrderByNameMas;
      }
    });
  };

  return (
    <button className="filter" onClick={order}>
      Filtro
    </button>
  );
}
export default Filter;

function OrderByNameMas() {
  Pokemones.sort((a, b) => a.name.localeCompare(b.name));
}

function OrderByNameMenos() {
  Pokemones.sort((a, b) => b.name.localeCompare(a.name));
  console.log(Pokemones);
}

function OrderByIdMas() {
  Pokemones.sort((a, b) => a.id - b.id);
  console.log(Pokemones);
}

function OrderByIdMenos() {
  Pokemones.sort((a, b) => a.id + b.id);
}
