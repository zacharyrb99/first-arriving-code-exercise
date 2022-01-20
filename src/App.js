import { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./Weather";  
import './App.css';

function App() {
  const [weather, setWeather] = useState({weather: null})

  const getWeatherData = async () => {
    let weatherData = await axios.get("https://api.weather.gov/gridpoints/AKQ/44,83/forecast");
    setWeather(weatherData);
  }

  useEffect(() => {
    const interval = setInterval(getWeatherData(), 10000);
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="App">
      <Weather data={weather} />
    </div>
  )
}

export default App;
