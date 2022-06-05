function displayCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input");
  let cityWritten = document.querySelector("h3.city");
  cityWritten.innerHTML = `${city.value}`;

  let apiKey = "87fada2310a69c86ce747c4ec875050c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  let temperature = Math.floor(response.data.main.temp);
  let temperatureWritten = document.querySelector(".temperature-number");
  temperatureWritten.innerHTML = `${temperature}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", displayCity);

let now = new Date();
let currentTime = document.querySelector("h3.hours");
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

currentTime.innerHTML = `˘${day} ${hours} : ${minutes}`;

function showCelsius(event) {
  event.preventDefault();
  let celsius = document.querySelector(".temperature-number");
  celsius.innerHTML = 25;
}

let celsius = document.querySelector("a.celsius");
celsius.addEventListener("click", showCelsius);

function showLocationTemperature(response) {
  let temperature = Math.floor(response.data.main.temp);
  let temperatureWritten = document.querySelector(".temperature-number");
  temperatureWritten.innerHTML = `${temperature}`;
  let city = response.data.name;
  let cityWritten = document.querySelector(".city");
  cityWritten.innerHTML = `${city}`;
}

function showLocation(position) {
  console.log(position);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  let apiKey = "87fada2310a69c86ce747c4ec875050c";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showLocationTemperature);
}
let locationSelector = document.querySelector(".location-button");
locationSelector.addEventListener("click", checkLocation);

function checkLocation() {
  navigator.geolocation.getCurrentPosition(showLocation);
}
// function showFahrenheit() {
//   event.preventDefault();
//   let fahrenheit = document.querySelector(".temperature-number");
//   fahrenheit.innerHTML = 77;
// }

// let fahrenheit = document.querySelector("a.fahrenheit");
// fahrenheit.addEventListener("click", showFahrenheit);
