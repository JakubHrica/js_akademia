const url = "http://api.open-meteo.com/v1/forecast"
const queryParams = new URLSearchParams({
  latitude: "48.1478",
  longitude: "17.1072",
  current_weather: true,
})

const response = await fetch(url + "?" + queryParams.toString())
const data = await response.json()
console.log(data)

console.log("Teplota: " + data.current_weather.temperature + data.current_weather_units.temperature);
console.log("Rychlost vetra : " + data.current_weather.windspeed + data.current_weather_units.windspeed);