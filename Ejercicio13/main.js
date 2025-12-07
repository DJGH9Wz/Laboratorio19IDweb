async function mostrarPokemon(pokemon) {
    const div = document.querySelector('#miDiv');

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data = await res.json();

        const stats = data.stats.map(stat => ({
                    name: stat.stat.name,
                    base_stat: stat.base_stat
                }));

        let tablaHTML = `
                    <h3>Estadísticas de ${data.name.toUpperCase()}</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Estadística</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>`;

        stats.forEach(stat => {
                    tablaHTML += `
                        <tr>
                            <td>${stat.name.replace('-', ' ').toUpperCase()}</td>
                            <td>${stat.base_stat}</td>
                        </tr>
                    `;
                });

        tablaHTML += `</tbody></table>`;
        div.innerHTML = tablaHTML;
    } catch (error) {
        div.innerHTML = `<p>Error ${error} al encontrar el pokemon</p>`
    }
}
const pokemon = prompt('Ingresa tu pokemon');
mostrarPokemon(pokemon);


