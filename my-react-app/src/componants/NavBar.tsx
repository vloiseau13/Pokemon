import { MouseEventHandler } from "react";

interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
  clickMoins: MouseEventHandler;
  clickPlus: MouseEventHandler;
}

function NavBar({
  pokemonIndex,
  clickMoins,
  clickPlus,
  pokemonList,
}: NavBarProps) {
  return (
    <div>
      {pokemonIndex > 0 && (
        <button type="button" onClick={clickMoins}>
          Précedent
        </button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button type="button" onClick={clickPlus}>
          Suivant
        </button>
      )}
    </div>
  );
}
export default NavBar;
