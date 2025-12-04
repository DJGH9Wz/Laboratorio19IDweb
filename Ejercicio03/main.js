
let pokemonID = prompt('Ingresa el ID del pokemon');
try {
pokemonID = pokemonID.replace(/^0+/, "");
const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
const data = await res.json();
    console.log("Nombre:", data.name);
} catch (err) {
    console.log("Error:", err);
}





