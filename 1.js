const apikey = "1be95c0eddedeab7f024f53d4f52fb6a"

let city = "Suwon"

const url = 'https://api.openweathermap.org/data/2.5/weather?q=$(city)appid=$(apikey)'

async function getWeather() {
    try {
        const response = await axios.get(url)

        console.log(response)
    } catch (error) {

    }
}