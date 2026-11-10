const searchForm = document.querySelector("#searchForm")
const cityInput =document.querySelector("#cityInput");
const message = document.querySelector("#message");

searchForm.addEventListener("submit",  function(event){
    event.preventDefault();

    const city = cityInput.value.trim();

    if (city === "") {
        message.textContent = "Veuillez saisir une ville."
        return;
    }
    message.textContent = "";

});

