async function pokemonAleatorio() {
    let numeroAleatorio = Math.trunc(Math.random()*898+1)
    try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}`);
    const data = await res.json();

    console.log("Pokemon aleatorio:", data.name);
    
    
    } catch (error) {
        console.log("Error:", error.message);
    }
}

pokemonAleatorio();


