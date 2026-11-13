import { getCoordinates, getCurrentWeather } from "./api.js";
import { displayWeather , displayForecasts } from "./ui.js";


const searchForm = document.querySelector("#searchForm");
const cityInput = document.querySelector("#cityInput");
const message = document.querySelector("#message");
const loadingMessage = document.querySelector("#loadingMessage");
const retryButton = document.querySelector("#retryButton");


let lastCity = "";


searchForm.addEventListener("submit", function (event) {
    event.preventDefault()

    const city = cityInput.value.trim();

    if (city === "") {
        message.textContent = "Veuillez saisir une ville."  ;
        retryButton.hidden = true
        return
    }

    lastCity = city
    searchWeather(city);

})


retryButton.addEventListener("click", function () {
    if (lastCity !== ""){
        searchWeather(lastCity) ;
    }
})



async function searchWeather(city) {

    message.textContent = "" 
    loadingMessage.hidden = false
    retryButton.hidden = true;

    try {
        // Recuperer  coordonnees ville
        const cityData = await getCoordinates(city) ;

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


        // Affiche meteo 
        displayWeather(cityData, weatherData)
        displayForecasts(forecasts)

    } catch (error) {
        message.textContent = error.message
        retryButton.hidden = false;

    } finally {
        loadingMessage.hidden = true ;
    }

}
