import {useState} from "react";
import {Pokemones} from "../../../pokemones";

function Filter(props) {
  const [funct, setFunct] = useState(OrderByNameMas());

  const images = [
    "/Images/azflechab.png",
    "/Images/azflechaA.png",
    "/Images/hashtagB.png",
    "/Images/hashtagA.png",
  ];
  const [imag, setImag] = useState(images[0]);

  const order = () => {
    setImag((prevSt) => {
      if (prevSt === images[0]) {
        return (prevSt = images[1]);
      }
      if (prevSt === images[1]) {
        return (prevSt = images[2]);
      }
      if (prevSt === images[2]) {
        return (prevSt = images[3]);
      }
      if (prevSt === images[3]) {
        return (prevSt = images[0]);
      }
    });
    // funct();
    // setFunct((f) => {
    //   if (f === OrderByNameMas) {
    //     return OrderByNameMenos;
    //   }
    //   if (f === OrderByNameMenos) {
    //     return OrderByIdMas;
    //   }
    //   if (f === OrderByIdMas) {
    //     return OrderByIdMenos;
    //   }
    //   if (f === OrderByIdMenos) {
    //     return OrderByNameMas;
    //   }
    // });
  };

  return <img className="filter" src={imag} onClick={order} />;
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
