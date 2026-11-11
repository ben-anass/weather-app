import { getCoordinates, getCurrentWeather } from "./api.js";
import { displayWeather } from "./ui.js";

const searchForm = document.querySelector("#searchForm");
const cityInput = document.querySelector("#cityInput");
const message = document.querySelector("#message");
const loadingMessage = document.querySelector("#loadingMessage");

searchForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const city = cityInput.value.trim();

    if (city === "") {
        message.textContent = "Veuillez saisir une ville.";
        return;
    }

    message.textContent = "";
    loadingMessage.hidden = false;

    try {
        // Recuperer  coordonnées de ville
        const cityData = await getCoordinates(city);

        // Recuperer  météo 
        const weatherData = await getCurrentWeather(
            cityData.latitude,
            cityData.longitude
        );

        const daily = weatherData.daily ;
        const forecasts = daily.time.map(function(date, index) {
            return {
                date : date , 
                max : daily.temperature_2m_max[index],
                min : daily.temperature_2m_min[index],
                code : daily.weather_code[index]
            } ;
        }) ;

        console.log(forecasts);


        // Affiche meteo 
        displayWeather(cityData, weatherData);

    } catch (error) {
        message.textContent = error.message;

    } finally {
        loadingMessage.hidden = true;
    }
});
