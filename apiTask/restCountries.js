'use strict';

let apiURL = "https://restcountries.com/v3.1/all"; // API URL

fetch(apiURL)
    .then(response => {return response.json()})
    .then(data => {
        const countriesContainer = document.getElementById('countriesContainer');
        data.forEach(item => {
            let country = document.createElement('div');
        
            let countryName = document.createElement('h1');
            countryName.textContent = item.name.common;

            let countryImg = document.createElement('img');
            countryImg.src = item.flags.png;

            // Append cells to the row
            country.appendChild(countryName);
            country.appendChild(countryImg);

          
            countriesContainer.appendChild(country);

        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
