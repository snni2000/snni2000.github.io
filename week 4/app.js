// API Key fetched from openweather
const apiKey = '4f50463e19667b3b5040528d730f5169';

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('btn'); // Corrected ID
const weatherInfoDiv = document.getElementById('weather-info'); // Corrected ID

// Adding an event listener to the button
searchBtn.addEventListener('click', () => {
  const cityName = cityInput.value.trim();

  if (!cityName) {
    alert('Please enter a city name.');
    return;
  }

  // HTTP request to the OpenWeatherMap API
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // the data is returned from the API then parsed and the weather info div is ipdated
      const weatherDescription = data.weather[0].description;
      const mainTemperature = data.main.temp;
      const mainTempCelsius = mainTemperature - 273.15; // Corrected calculation
      const windSpeed = data.wind.speed;

      const weatherInfoHTML = `
        <p>The weather in ${cityName} is ${weatherDescription}</p>
        <p>The temperature is ${mainTempCelsius.toFixed(2)}°C with a wind speed of ${windSpeed}m/s</p>
      `;

      weatherInfoDiv.innerHTML = weatherInfoHTML;
    })
    .catch(error => {
      // This is the Error handling for HTTP Status Code Error, API-Specific Error, Network Error
      console.error('Error:', error.message);
      weatherInfoDiv.innerHTML = '<p>Error fetching weather data</p>';
    });
});
