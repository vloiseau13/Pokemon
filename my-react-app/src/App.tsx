import { useState } from "react";
import "./App.css";
import PokemonCard from "./componants/PokemonCard";
import NavBar from "./componants/NavBar";

const pokemonList = [
  {
    name: "Bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Salamèche",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "Carapuce",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "Mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const clickPlus = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  const clickMoins = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <div>
      <NavBar
        pokemonIndex={pokemonIndex}
        clickPlus={clickPlus}
        clickMoins={clickMoins}
        pokemonList={pokemonList}
        setPokemonIndex={setPokemonIndex}
      />

      <PokemonCard
        name={pokemonList[pokemonIndex].name}
        imgSrc={pokemonList[pokemonIndex].imgSrc}
      />
    </div>
  );
}

export default App;
