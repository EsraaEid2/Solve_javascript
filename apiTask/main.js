'use strict';

let apiURL = "https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json"; // API URL

fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        const result = data.Results;
        const vehicleBody = document.getElementById('vehicleBody');

        result.forEach(item => {
            let row = document.createElement('tr');

            let makeCell = document.createElement('td');
            let typeCell = document.createElement('td');

            makeCell.textContent = item.MakeName;
            typeCell.textContent = item.VehicleTypeName;

            // Append cells to the row
            row.appendChild(makeCell);
            row.appendChild(typeCell);

            // Append the row to the table body
            vehicleBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
