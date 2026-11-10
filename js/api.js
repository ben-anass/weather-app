const API_KEY = "d276c62571a2fd3dfee7df0e723a0270"

export function buildWeatherURL(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
    return url ;
}

// ###############d27########6c6########2571a2fd####################3df########ee7########df0########e72######################3a0########270#########
export async function getWeather(city) {
    const url = buildWeatherURL(city)

    const response = await fetch(url)
    
    return response;
}

