interface PokemonCardProps {
  pokemon: {
    imageSrc?: string;
    name: string;
  }
}

function PokemonCard({ pokemon }: PokemonCardProps) {

    return (
        <figure>
            {pokemon.imageSrc === undefined ? <p>???</p> : <img src={pokemon.imageSrc}/>}
        <figcaption>{pokemon.name}</figcaption>
        </figure>
    );

}
  
  export default PokemonCard;