try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");
    const pokemon = await res.json();

    console.log(pokemon.sprites.front_default);
  } catch (e) {
    console.log(e);
  }

