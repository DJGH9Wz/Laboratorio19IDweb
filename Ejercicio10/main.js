async function cargarPokemones() {
    for(let i=1;i<=10;i++){
        const nuevoDiv = document.createElement('div');
        nuevoDiv.classList.add('carta');

        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const data = await res.json();

            nuevoDiv.innerHTML = `
                <h2>${data.name.toUpperCase()}</h2>
                <img src="${data.sprites.front_default}">
                <p>ID: ${data.id}</p>`
            
        } catch (error) {
            NuevoDiv.innerHTML = `<p>Error ${error} al encontrar el pokemon</p>`
        }

        document.body.appendChild(nuevoDiv);
    }
}

cargarPokemones();


