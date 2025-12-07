async function mostrarPokemones(inicio,fin) {
    const div = document.querySelector('#contenedor');
    div.innerHTML='';

    for(let i=inicio;i<=fin;i++){
        const tarjeta = document.createElement('div')
        tarjeta.classList.add('carta')
            const data = pokemonData[i];


            tarjeta.innerHTML = `
                <img src="${data.sprites.front_default}">
                <h2>${data.name.toUpperCase()}</h2>
                <p>ID: ${data.id}</p>
                <p>Peso: ${data.weight}</p>
                <p>Altura: ${data.height}</p>`
        
        div.appendChild(tarjeta);
    }
}
        
async function cargarPokemones() {
    const promises = [];
    for (let i = 1; i <= 12; i++) {
        promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
    }

    pokemonData = await Promise.all(promises);
    mostrarPokemones(inicio, fin); 
}

let pokemonData = []; 
let inicio = 0; 
let fin = 2; 
cargarPokemones();
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

btn1.addEventListener('click',() =>{
    if(inicio>0){
        inicio-=3
        fin-=3
        mostrarPokemones(inicio,fin)
    }

})

btn2.addEventListener('click',() =>{
    if(fin<12){
        inicio+=3
        fin+=3
        mostrarPokemones(inicio,fin)
    }
})









