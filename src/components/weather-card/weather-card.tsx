import React from 'react';
import './weather-card.css';
import { FiMapPin, FiSun } from 'react-icons/fi';
import moment from 'moment';

interface IWeatherCardProps {
    cityName: string,
    country: string,
    temp: number,
    weather: string
}

function WeatherCard() {
    return (
        <div className="weather-card">
            <div className="weather-side">
                <div className="weather-gradient">
                </div>
                <div className="date-container">
                    <h2 className="date-dayname">{moment().format('dddd')}</h2>
                    <span className="date-day">{new Date().toDateString()}</span>
                    <span className="location-icon"><FiMapPin /></span>
                    <span className="location">valami</span>
                </div>

                <div className="weather-container">
                    <span className="weather-icon"><FiSun /></span>
                    <h1 className="weather-temp">°C</h1>
                    <h3 className="weather-desc">sunny</h3>
                </div>

            </div>
        </div>
    );
}

export default WeatherCard;