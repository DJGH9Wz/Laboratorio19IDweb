async function mostrarPokemon(pokemon) {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data = await res.json();

        const estadisticas = data.stats.map(stat => {
            return `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`;
        }).join('\n');

        console.log(`${data.name.toUpperCase()}\n${estadisticas}`);
        
    } catch (error) {
        console.log(`Error ${error} al encontrar el pokemon`)
    }
}
const pokemon = prompt('Ingresa tu pokemon');
mostrarPokemon(pokemon);


