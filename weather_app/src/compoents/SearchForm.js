import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = ({ setWeatherData }) => {
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');
    const API_KEY = '6b8973f3c5184c99a56164030230108';
    const API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`;

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(API_URL);
            if (response.data.error) {
                setError('Location not found. Please enter a valid location.');
                setWeatherData(null);
            } else {
                setError('');
                setWeatherData(response.data);
            }
        } catch (error) {
            setError('Error fetching weather data. Please try again later.');
            console.error('Error fetching weather data:', error);
            setWeatherData(null);
        }
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location"
            />
            <button type="submit">Search</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default SearchForm;
