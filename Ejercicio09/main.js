async function mostrarPokemon(pokemon) {
    const div = document.querySelector('#miDiv');
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data = await res.json();

        const habilidades = data.abilities.map(a => a.ability.name).join(", ");

        div.innerHTML = `
            <img src="${data.sprites.front_default}">
            <h2>${data.name.toUpperCase()}</h2>
            <p>ID: ${data.id}</p>
            <p>Peso: ${data.weight}</p>
            <p>Altura: ${data.height}</p>
            <p>Habilidades: ${habilidades}</p>`
        
    } catch (error) {
        div.innerHTML = `<p>Error ${error} al encontrar el pokemon</p>`
    }
}
const pokemon = prompt('Ingresa tu pokemon');
mostrarPokemon(pokemon);


