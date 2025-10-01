const url = "https://geocoding-api.open-meteo.com/v1/search";
const queryParams = new URLSearchParams({
  name: "Paris",
});

const response = await fetch(url + "?" + queryParams.toString());
const data = await response.json();
console.log(data);

const city = data.results[0];
console.log("City: " + city.name);
console.log("Latitude: " + city.latitude);
console.log("Longitude: " + city.longitude);