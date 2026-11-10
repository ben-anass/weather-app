import { getWeather } from "./api.js";

const searchForm = document.querySelector("#searchForm")
const cityInput =document.querySelector("#cityInput");
const message = document.querySelector("#message");
const loadingMessage = document.querySelector("#loadingMessage");



searchForm.addEventListener("submit",  async function (event){
    event.preventDefault();

    const city = cityInput.value.trim();

    
    
    if (city === "") {
        message.textContent = "Veuillez saisir une ville.";
        return;
    }

    message.textContent = "";
    loadingMessage.hidden = false;

    try {
        const response = await getWeather(city);

        if (!response.ok) {
            throw new Error("Ville introuvable ou erreur API.");
        }

    } catch (error) {
        message.textContent = error.message;

    } finally {
        loadingMessage.hidden = true;
    }

});







