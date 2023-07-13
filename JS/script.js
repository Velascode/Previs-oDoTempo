const key = "9d04f5a7e0e77fffb4db6ec45142fa27"

function exibirDados(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + " °C"
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    
    document.querySelector(".clima-img").innerHTML = 
    `<img class="img-previsao" src="https://openweathermap.org/img/wn/${dados.weather[0].icon}.png" alt="icone-info-tempo">
    <p class="texto-previsao">${dados.weather[0].description}</p>`

}


async function searchCity(city) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    exibirDados(dados)
}

function clickButtom() {

    const city = document.querySelector(".input-cidade").value

    searchCity(city)
}