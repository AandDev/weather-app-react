import icons from "../assets/icons";

const WeatherInfo = ({ weatherData }) => {

    if(weatherData) {

        return(
            <div className="weather-card box">
                <h2 className="weather-location">
                    {weatherData.city}, {weatherData.country}.
                </h2>
                <figure className="weather-icon">
                    <img src={icons[weatherData.icon]} alt="weather-icon" className="icon"/>
                </figure>
                <div className="weather-now">
                <h1 className="weather-temperature">
                    {Math.floor(weatherData.temp)}°C
                </h1>
                <h3 className="weather-description">{weatherData.description}</h3>
                </div>
                <div className="more-weather-info">
                    <div className="info-item">
                        <i className="fas fa-tint"></i>
                        <p>{weatherData.humidity}%</p>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-temperature-high"></i>
                        <p>{Math.floor(weatherData.tempMin)}°c / {Math.floor(weatherData.tempMax)}°c</p>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-wind"></i>
                        <p>{weatherData.wind} km/h</p>
                    </div>
                </div>
            </div>
        )
    } 
}

export default WeatherInfo;