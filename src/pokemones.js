import {useEffect, useState} from "react";

function Pokemones() {
  const [pokeList, setPokeList] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((result) => {
        setPokeList(result.results);
      });
  }, []);
  let array = [];
  pokeList.forEach((result) => {
    const fetchedPokes = fetch(result.url)
      .then((res) => res.json())
      .then((result) => {
        array.push({
          id: result.id,
          name: result.name,
          img: result.sprites.front_default,
          gif: result.sprites.front_default,
          shiny: result.sprites.front_shiny,
          types: [result.types[0].type.name, result.types[1].type.name],
          weight: result.weight,
          height: result.height,
          moves: [result.moves[0].name, result.moves[1].name],
          description:
            "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
          stats: {
            hp: result.stats[0].base_stat,
            atk: result.stats[1].base_stat,
            def: result.stats[2].base_stat,
            satk: result.stats[3].base_stat,
            sdef: result.stats[4].base_stat,
            spd: result.stats[5].base_stat,
          },
        });
      });
    return fetchedPokes;
  });
  console.log("uf", array);
  return array;
}
export default Pokemones;
