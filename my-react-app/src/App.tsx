import { useState } from "react";
import "./App.css";
import PokemonCard from "./componants/PokemonCard";

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
  const [pokemonIndex, SetPokemonIndex] = useState(0);
  const clickPlus = () => {
    SetPokemonIndex(pokemonIndex + 1);
  };
  const clickMoins = () => {
    SetPokemonIndex(pokemonIndex - 1);
  };

  return (
    <div>
      <PokemonCard
        name={pokemonList[pokemonIndex].name}
        imgSrc={pokemonList[pokemonIndex].imgSrc}
      />
      {pokemonIndex > 0 ? (
        <button type="button" onClick={clickMoins}>
          Précedent
        </button>
      ) : (
        ""
      )}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button type="button" onClick={clickPlus}>
          Suivant
        </button>
      ) : (
        ""
      )}

      <p>{pokemonIndex}</p>
    </div>
  );
}

export default App;
