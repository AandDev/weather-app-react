import { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import WeatherInfo from './components/WeatherInfo';
import Footer from './components/Footer';
import apiKey from './components/Keys';
import images from "./assets/images";

function App() {

  let lat;
  let lon;

  const [weatherData, setWeatherData] = useState({
    description: "-",
    icon: "error",
    temp: "-",
    tempMin: "-",
    tempMax: "-",
    humidity: "-",
    wind: "-",
    country: "por favor",
    city: "Habilite la geolocalización",
  });


  const startApp = () => {

    if(navigator.geolocation) {
  
      navigator.geolocation.getCurrentPosition( position => {
          lat = position.coords.latitude;
          lon = position.coords.longitude;
  
          const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  
          const getWeather = async () => {
            const response = await fetch(API_URL);
            const data = await response.json();
        
            const weatherInfo = {
              description: data.weather[0].description,
              icon: data.weather[0].icon,
              temp: data.main.temp,
              tempMin: data.main["temp_min"],
              tempMax: data.main["temp_max"],
              humidity: data.main.humidity,
              wind: data.wind.speed,
              country: data.sys.country,
              city: data.name
            }
        
            setWeatherData(weatherInfo);
          }
  
          getWeather();
      })
      
    }
  }

  useEffect( () => {

    startApp();

  }, [] )
  

  return (
    <div className="App">
      <div className="app-card">
        <Header />
        <WeatherInfo weatherData={weatherData}/>
        <Footer />
      </div>
      <img className="bg-img" src={images[weatherData.icon]} alt="Background"/>
    </div>
  );
}

export default App;