import "./App.css";
import PokemonCard from "./componants/PokemonCard";

const pokemonList = [
  {
    name: "Bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Mew",
  },
];

function App() {
  const pokemon = { name: "mew", imgSrc: null };
  return (
    <>
      <PokemonCard pokemon={pokemon} />
    </>
  );
}

export default App;
