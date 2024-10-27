interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

function NavBar({ pokemonList, setPokemonIndex }: NavBarProps) {
  return (
    <div>
      {pokemonList.map((poke, i) => {
        return (
          <button
            key={poke.name}
            onClick={() => {
              setPokemonIndex(i);
              {
                poke.name === "Pikachu" && alert("Pika Pikachu !!!");
              }
            }}>
            {poke.name}
          </button>
        );
      })}
    </div>
  );
}
export default NavBar;
