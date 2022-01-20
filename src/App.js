import { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./Weather";  
import './App.css';

function App() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const getWeatherData = async () => {
      let weatherData = await axios.get("https://api.weather.gov/gridpoints/AKQ/44,83/forecast");
      setWeather(weatherData.data.properties);
    }

    getWeatherData();

    let interval = setInterval(() => getWeatherData(), 10000);
  }, [])

  return (
    <div className="App">
      <Weather data={weather} />
    </div>
  )
}

export default App;
