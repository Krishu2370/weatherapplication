import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
    return (
      <div>
        <h2>Weather Information</h2>
        {weatherData ? (
          <div>
            <p>Location: {weatherData.location.name}, {weatherData.location.country}</p>
            <p>Temperature: {weatherData.current.temp_c}°C</p>
            <p>Humidity: {weatherData.current.humidity}%</p>
            <p>Condition: {weatherData.current.condition.text}</p>
            <img
              src={weatherData.current.condition.icon}
              alt={weatherData.current.condition.text}
            />
          </div>
        ) : (
          <p>No weather data available</p>
        )}
      </div>
    );
  };

export default WeatherDisplay;
