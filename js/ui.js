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

export function createForecastCard(forecast) {
    const card = document.createElement("article")
    card.classList.add("forecast-card") ;

    const date = document.createElement("h3")
    const formattedDate = new Date(forecast.date + "T00:00:00")

    date.textContent = formattedDate.toLocaleDateString("fr-FR", {
        weekday : "long" , day : "numeric" , month : "long" 
    })

    const maxTemp = document.createElement("p") 
    maxTemp.textContent = `Max : ${forecast.max ?? "Donnée indisponible"} °C`

    const minTemp = document.createElement("p")
    minTemp.textContent = `Min : ${forecast.min ?? "Donnée indisponible"} °C` 
    
    card.append(date , maxTemp  , minTemp )


    return  card ;
}



export function displayForecasts(forecasts) {
    const container = document.querySelector("#forecastList")
    container.textContent = "" 

    const cards = forecasts.map(function(forecast) {
        return createForecastCard(forecast ) ;
    })
    container.append(...cards)
}





































// export function displayForecasts(forecasts) {
//     const container = document.querySelector("#forecastList");

//     container.textContent = "";

//     // هنا غادي نخدمو على كل forecast
// }















