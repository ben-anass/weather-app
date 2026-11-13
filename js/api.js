const API_KEY = "d276c62571a2fd3dfee7df0e723a0270"

export async function getCoordinates(city) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=fr&format=json`;

    const response = await fetch(url)
    if (!response.ok) {
        throw new Error("Entre lors de la rechrche de la ville ")
    }
    const data = await response.json() ;

    if (!data.results || data.results.length === 0) {
        throw new Error("Ville introuvable.");
    }
    return data.results[0]
}


export async function getCurrentWeather(latitude, longitude) {
    
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code&forecast_days=5&temperature_unit=celsius&wind_speed_unit=kmh&timezone=auto`;

    const response = await fetch(url);

    if (!response.ok) {
        if (response.status === 429) {
            throw new Error("Quota atteint. Veuillez réessayer plus tard.")
        }
        throw new Error("Le service météo est temporairement indisponible.")
    }
    
    const data = await response.json();

    return data;
}
