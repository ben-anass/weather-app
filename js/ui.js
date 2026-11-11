import { WEATHER_CODES } from "./weatherCodes.js";

export function displayWeather(cityData, weatherData) {
    const container = document.querySelector("#weatherContainer")

    container.textContent = "" ;
    const current = weatherData.current;
    
    const weatherCode = current.weather_code 

    const weatherInfo = WEATHER_CODES[weatherCode] || {
        label : "Conditions meteo inconues", icon : "?"}
    
    const temperature = current.temperature_2m 
    const humidity = current.relative_humidity_2m 
    const windSpeed = current.wind_speed_10m 

    const card = document.createElement("article");
    card.classList.add("weather-card")

    const cityName = document.createElement("h2")
    cityName.textContent = cityData.name 

    const icon = document.createElement("p")
    icon.textContent = weatherInfo.icon 
    icon.classList.add("weather-icon");

    const description = document.createElement("p")
    description.textContent = weatherInfo.label 


    const temp = document.createElement("p")
    temp.textContent = `${temperature} °C` ;

    const humidityText = document.createElement("p")
    humidityText.textContent =`Humidite : ${humidity} %` ;

    const wind = document.createElement("p")
    wind.textContent = ` vent : ${windSpeed} km/h`;

    card.append(cityName , icon , description , temp , humidityText , wind  ) 

    container.appendChild(card);
    


}


