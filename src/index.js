//Set day time
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let now = new Date();
let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let selectDayTime = document.querySelector("#day-time");
selectDayTime.innerHTML = `${day} ${hours}:${minutes}`;

//Choose city
let city = document.querySelector("#cityName");

function showCity(event) {
  event.preventDefault();
  let h1 = document.querySelector("#cityType");
  h1.innerHTML = `${city.value}`;
}

let searchButton = document.querySelector("#city-form");
searchButton.addEventListener("submit", showCity);

//-------Degree in Celsius and Fahrenheit-------
let setDegree = document.querySelector("#degree");

function showCelsius() {
  setDegree.innerHTML = "19";
}
let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", showCelsius);

function showFahrenheit() {
  setDegree.innerHTML = "66";
}
let fahr = document.querySelector("#fahr");
fahr.addEventListener("click", showFahrenheit);
