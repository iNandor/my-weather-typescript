import React from 'react';
import './weather-card.css';
import { FiMapPin } from 'react-icons/fi';
import moment from 'moment';
import { IWeather } from '../../types';

function WeatherCard({ location, country, temp, weather, icon }: IWeather) {
    return (
        <div className="weather-card">
            <div className="weather-gradient">
            </div>
            <div className="date-container">
                <h2 className="date-dayname">{moment().format('dddd')}</h2>
                <span className="date-day">{moment().format('ll')}</span>
                <span className="location-icon"><FiMapPin /></span>
                <span className="location">{`${location}, ${country}`}</span>
            </div>
            <div className="weather-container">
                <img className="weather-icon" src={icon} alt=''></img>
                <h1 className="weather-temp">{Math.round(temp) + '°C'}</h1>
                <h3 className="weather-desc">{weather}</h3>
            </div>
        </div>
    );
}

export default WeatherCard;