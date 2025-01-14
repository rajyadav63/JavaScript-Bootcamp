document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById("city-input")
    const getWeather = document.getElementById("get-weather-btn")
    const weatherInfo = document.getElementById("weather-info")
    const cityName = document.getElementById("city-name")
    const temperaturDisplay = document.getElementById("temperatur")
    const descriptionDisplay = document.getElementById("description")
    const errorDisplay = document.getElementById("error-message")

    const API_KEY = "3aa81814c99afbf3c35d32f784b0c3b6";

    getWeather.addEventListener('click', async () => {
        const city = cityInput.value.trim();
        if (!city) return;

        //it may throw error
        //server/database is always in another continent

        try {
            const weatherData = await fetchWeatherData(city)
            displayWeatherData(weatherData);
        } catch (error) {
            showError();
        }
    });

    async function fetchWeatherData(city) {
        //get the data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;


        const response = await fetch(url);
        // console.log(response);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        return data;

    }

    function displayWeatherData(data) {
        //display the data
        // console.log(data);
        const { name, main, weather } = data;
        cityName.textContent = name;
        temperaturDisplay.textContent = `Temperature ${main.temp}`;
        descriptionDisplay.textContent = `Weather : ${weather[0].description}`;

        //unlock the display
        weatherInfo.classList.remove('hidden')
        errorDisplay.classList.add('hidden')

    }

    function showError() {
        weatherInfo.classList.remove('hidden');
        errorDisplay.classList.add('hidden');
    }

});
