
//RGAPI-f14b72bf-e6a4-4a63-a5d5-b309614b95e7 riot api key
const apiKey = '7b5e47586a9b821562892331d70f4823';
const city = "Suwon"

(async () => {
    const response = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=kr`)

console.log("Promise Line Start")

const weather = {
    city: response.data.name,
    temperature: response.data.main.temp,
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity
};

console.log(`지역: ${weather.city}, 온도: ${weather.temperature}°C, 상태: '${weather.description}', 습도: ${weather.humidity}%`);

promise.then((response) => {
    console.log(response)
})
console.log("Promise Line End")
})