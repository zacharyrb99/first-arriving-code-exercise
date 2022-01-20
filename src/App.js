import { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./Weather";  
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getWeatherData = async () => {
      let weatherData = await axios.get("https://api.weather.gov/gridpoints/AKQ/44,83/forecast");
      setWeather(weatherData.data.properties.periods[0]);
      setIsLoading(false)
    }

    getWeatherData();

    setInterval(() => getWeatherData(), 600000);
  }, [])

  if(isLoading) {
    return (
      <div className="Weather-loading">
        <h1> Loading Weather Data </h1> 
      </div>
    )
  }

  return (
    <div className="App">
      <Weather weather={weather} />
    </div>
  )
}

export default App;
