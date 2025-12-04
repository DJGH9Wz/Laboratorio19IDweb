async function listarPokemon() {
    try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`);
    const data = await res.json();

    data.results.forEach(n => {
        console.log(n.name);
    });
    
    } catch (error) {
        console.log("Error:", error.message);
    }
}

listarPokemon();

