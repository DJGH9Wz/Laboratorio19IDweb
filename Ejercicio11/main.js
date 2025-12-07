async function mostrarPokemon(pokemon) {
    const div = document.querySelector('#miDiv');
    
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data = await res.json();
        const tipos = data.types.map(a => a.type.name);

        div.innerHTML = `
            <h2>${data.name.toUpperCase()}</h2>
            <img src="${data.sprites.front_default}"
            <p>Tipos: ${tipos.join(', ')}</p>
            `
        
    } catch (error) {
        div.innerHTML = `<p>Error ${error} al encontrar el pokemon</p>`
    }
}
const pokemon = prompt('Ingresa tu pokemon o su id');
mostrarPokemon(pokemon);


