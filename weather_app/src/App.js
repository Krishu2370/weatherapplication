import './App.css';
import SearchForm from './compoents/SearchForm';
import WeatherDisplay from './compoents/WeatherDisplay';
import React, { useState } from 'react';
function App() {
  const [weatherData, setWeatherData] = useState(null);
  return (
    <div className="container">
      <h1>Weather App</h1>
      <SearchForm setWeatherData={setWeatherData} />
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
}

export default App;
