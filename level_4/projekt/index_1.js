// Projekt: Jednoduchá weather appka
const geoUrl = "https://geocoding-api.open-meteo.com/v1/search";
const weatherUrl = "https://api.open-meteo.com/v1/forecast";

const readline = require('readline/promises');

async function main() {
    const input = readline.createInterface({ input: process.stdin, output: process.stdout });

    try {
        // Input for city name
        const city = await input.question('Zadaj názov mesta: ');

        const geoQueryParams = new URLSearchParams({
            name: city
        });

        const geoResponse = await fetch(geoUrl + "?" + geoQueryParams.toString());

        const geoData = await geoResponse.json();

        const cities = geoData.results;
        let selectedCityData;

        if (cities.length > 1) {
            console.log('\nBolo nájdených viac výsledkov.');
            console.log('------------------------------')

            const citiesLength = cities.length;

            for (let i = 0; i < citiesLength; i++) {
                let countryName = cities[i].country;

                if (countryName === 'United States') {
                    countryName = cities[i].country + ', ' + cities[i].admin1;
                }

                console.log(i + 1 + '. ' + cities[i].name + ' (' + countryName + ')');
            }

            console.log('------------------------------')

            const selectedInput = await input.question('\nZadaj číslo mesta, ktoré chceš vybrať: ');

            const selectedIndex = selectedInput - 1;

            selectedCityData = cities[selectedIndex]; 
        } else {
            selectedCityData = cities[0];
            console.log('\nNájdený jeden výsledok: ' + selectedCityData.name + ' (' + selectedCityData.country + ')');
        }

        console.log('\nVybrané mesto: ' + selectedCityData.name + selectedCityData.country);
        console.log('Geografická šírka (Latitude): ' + selectedCityData.latitude);
        console.log('Geografická výška (Longitude): ' + selectedCityData.longitude);

        const weatherQueryParams = new URLSearchParams({
            latitude: selectedCityData.latitude,
            longitude: selectedCityData.longitude,
            current_weather: 'true',
            temperature_unit: 'celsius',
            windspeed_unit: 'ms',
            timezone: 'auto',
        });
        
        const weatherResponse = await fetch(weatherUrl + "?" + weatherQueryParams.toString());

        const weatherData = await weatherResponse.json();

        const current_weather = weatherData.current_weather;

        console.log('\n--- Aktuálne počasie ---');
        console.log(`Teplota: ${current_weather.temperature}°C`);
        console.log(`Rýchlosť vetra: ${current_weather.windspeed} m/s`);

    } catch (error) {
        console.log('Zadané mesto neexistuje.');
    } finally {
        input.close();
    }
}

main();
