const apikey = "1be95c0eddedeab7f024f53d4f52fb6a"

let city = "Suwon"

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

async function getWeather() {
    try {
        const response = await axios.get(url)
        const weather = {
            city: response.data.name,
            tempurature: response.data.main.temp,
            humidity: response.data.main/humidity
        };
        let displayTempurature = Math.floor10(weather.tempurature, -1)

        document.getElementById('output').innerHTML = `도시:${weather.city}, 온도:${displayTempurature}, 습도:${weather.humidity}`
        console.log(`도시:${weather.city}, 온도:${displayTempurature}, 습도:${weather.humidity}`)

    } catch (error) {

    }
}
getWeather();
console.log('hi')