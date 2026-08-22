import axios from 'axios'
import { useState, useEffect } from 'react'


const Weather = ({city}) => { 
    const api_key = import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${api_key}`)
          .then(response => {
            setWeather(response.data)
          })
      }, [city])

    if (weather === null) {
        return <div>Loading weather...</div>
    }
        
    return (
    <div>
        <h2> Weather in {city} </h2>
        Temperature {weather.main.temp} Fahrenheit
        <div> <img 
                src={`https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`} 
                alt={`weather icon of ${city}`}
                style={
                    { 
                        height: '100px',
                    }
                }
            />
        </div>

        Wind {weather.wind.speed} m/s

    </div>
    )
}

export default Weather