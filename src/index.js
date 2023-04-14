'use strict';


// async load img



const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    getWeatherData(event.target.city.value);
});

async function getWeatherData(city){
    const API_KEY = 'b9c4be44d8633df1d1b499cd272205f0'; // subscribe
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ua`
    const responce = await fetch(url);
    const data = await responce.json();

   console.log(data);
   updateWeatherCard(data);
}




function updateWeatherCard(weatherObj){
    const wrapper = document.querySelector('.weather-card');
    wrapper.classList.add('show');

    wrapper.children[0].textContent = `Погода в місті ${weatherObj.name}:`;
    wrapper.children[1].textContent = `Температура повітря: ${weatherObj.main.temp}`;
    wrapper.children[2].textContent= `Опис: ${weatherObj.weather[0].description}`;
    wrapper.children[3].textContent= `Швидкість вітру: ${weatherObj.wind.speed}`;

    console.log(weatherObj.main.temp)
}