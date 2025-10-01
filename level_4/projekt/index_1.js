// Projekt: Jednoduchá wheater appka
const geoUrl = "https://geocoding-api.open-meteo.com/v1/search";
const weatherUrl = "http://api.open-meteo.com/v1/forecast"

const readline = require('readline/promises');

async function main() {
    const input = readline.createInterface({input: process.stdin, output: process.stdout});

    const city = await input.question('Zadaj názov mesta: ');

    try {
        const geoQueryParams = new URLSearchParams({
            name: city,
        });

        const geoResponse = await fetch(geoUrl + "?" + geoQueryParams.toString());
        const geoData = await geoResponse.json();

        const cityGeo = geoData.results[0];
        console.log('\nGeografická šírka a výška mesta ' + city + ' je:')
        console.log("Latitude: " + cityGeo.latitude);
        console.log("Longitude: " + cityGeo.longitude);

        const weatherQueryParams = new URLSearchParams({
            latitude: cityGeo.latitude,
            longitude: cityGeo.longitude,
            current_weather: true,
        })

        const wheaterResponse = await fetch(weatherUrl + "?" + weatherQueryParams.toString())
        const wheaterData = await wheaterResponse.json()

        console.log('\nTeplota a rýchlosť vetra v meste '+ city + ' je:')
        console.log("Teplota: " + wheaterData.current_weather.temperature + wheaterData.current_weather_units.temperature);
        console.log("Rychlost vetra : " + wheaterData.current_weather.windspeed + wheaterData.current_weather_units.windspeed);
    } catch {
        console.log('Zadané mesto neexistuje!')
    }
    
    input.close();
}

main()