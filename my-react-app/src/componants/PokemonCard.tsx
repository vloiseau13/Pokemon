interface PokemonProps {
  name: string;
  imgSrc?: string;
}
function PokemonCard({ name, imgSrc }: PokemonProps) {
  return (
    <div>
      <figure>
        {imgSrc ? <img src={imgSrc} /> : <p>???</p>}
        <figcaption>{name}</figcaption>
      </figure>
    </div>
  );
}
export default PokemonCard;
