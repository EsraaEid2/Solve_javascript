'use strict';

let apiURL = "https://pokeapi.co/api/v2/pokemon?limit=100"; // API URL

fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        const pokemonsContainer = document.getElementById('pokemonsContainer');

        // Loop through each Pokémon in the results array
        data.results.forEach(item => {
            // Fetch more details for each Pokémon using its URL
            fetch(item.url)
                .then(response => response.json())
                .then(pokemonData => {
                    let pokemon = document.createElement('div');

                    // Get the Pokémon name and image from the detailed response
                    let pokemonName = document.createElement('h1');
                    pokemonName.textContent = pokemonData.name;

                    let pokemonImg = document.createElement('img');
                    pokemonImg.src = pokemonData.sprites.front_default;  // Get image from sprites

                    // Append name and image to the Pokémon div
                    pokemon.appendChild(pokemonName);
                    pokemon.appendChild(pokemonImg);

                    // Append the Pokémon div to the container
                    pokemonsContainer.appendChild(pokemon);
                })
                .catch(error => {
                    console.error('Error fetching Pokémon details:', error);
                });
        });
    })
    .catch(error => {
        console.error('Error fetching Pokémon list:', error);
    });
