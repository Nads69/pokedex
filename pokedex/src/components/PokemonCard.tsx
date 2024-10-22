function PokemonCard()
{   const Pokemon = pokemonList[1];
    return (
        <figure>
            {Pokemon.imgSrc === undefined ? <p>???</p> : <img src={Pokemon.imgSrc}/>}
        <figcaption>{Pokemon.name}</figcaption>
        </figure>
    );
}
  
  export default PokemonCard;

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
