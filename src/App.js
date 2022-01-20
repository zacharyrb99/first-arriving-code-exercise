import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {
  const latitude = 37.6928;
  const longitude = -77.4364;
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
      <h1> First Arriving </h1>
    </div>
  )
}

export default App;
