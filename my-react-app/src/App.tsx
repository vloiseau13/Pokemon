import { useState } from "react";
import "./App.css";
import PokemonCard from "./componants/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
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
      <PokemonCard name={pokemonList[0].name} imgSrc={pokemonList[0].imgSrc} />
      {pokemonIndex > 0 ? (
        <button type="button" onClick={clickMoins}>
          Précedent
        </button>
      ) : (
        ""
      )}
      {pokemonIndex < pokemonList.length ? (
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
