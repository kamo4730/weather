const apiKey = '7b5e47586a9b821562892331d70f4823';

let city
let url

async function getWeather() {
    try {
        const response = await axios.get(url);

        const weather = {
            city: response.data.name,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity
        };

        console.log(`지역: ${weather.city}, 온도: ${weather.temperature}°C, 상태: '${weather.description}', 습도: ${weather.humidity}%`);
        document.getElementById('output').innerHTML = `지역: ${weather.city}, 온도: ${weather.temperature}°C, 상태: '${weather.description}', 습도: ${weather.humidity}%`;
    } catch (error) {
        console.log(error);
    }
}

function search() {
    city = document.getElementById('userInput').value;
    url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=kr`;
    getWeather();
}