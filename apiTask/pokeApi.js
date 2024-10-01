'use strict';

let apiURL = "https://pokeapi.co/api/v2/pokemon/ditto"; // API URL

fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        const Poke = document.getElementById('pokemonContainer');

        data.forEach(item => {
            let pokemon=document.createElement('div');
            let pokemanName=document.createElement('h1');
            pokemon.appendChild(pokemanName);
            pokemanName.textContent=item.abilities.ability.name;

            // Append cells to the row
            Poke.appendChild(pokemon);
         
            // Append the row to the table body
            pokemon.appendChild(pokemanName);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
