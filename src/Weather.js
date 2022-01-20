import "./Weather.css"

const Weather = ({weather}) => {
    console.log(weather);

    return (
        <div>
            <h1> Weather for: </h1>
            <h3> 9555 Kings Charter Drive, Ashland VA 23005 </h3>

            <div className="Weather-mainInfo">
                <img className="Weather-icon" src={weather.icon}/>
                <span className="Weather-forecast"> {weather.detailedForecast} </span>
            </div>
        </div>
    )
}

export default Weather;