import React, { useState } from 'react';
import './App.css';
import WeatherCard from './components/weather-card/weather-card';
import { IApi, IWeather } from './types';

const api: IApi = {
  key: 'bba31a65b0f6060e34b2b164249c2509',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  const [querry, setQuerry] = useState<string>('');
  const [weather, setWeather] = useState<IWeather>({
    location: '',
    country: '',
    temp: 0,
    weather: '',
    icon: ''
  });

  function search(k: any) {
    if (k.key === 'Enter') {
      fetch(`${api.base}weather?q=${querry}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(prevWeather =>({
            ...prevWeather,
            location: result.name,
            country: result.sys.country,
            temp: result.main.temp,
            weather: result.weather[0].main,
            icon: 'http://openweathermap.org/img/wn/' + result.weather[0].icon + '@2x.png'
          }));
          setQuerry('');
        }).catch(error => {
          console.log(error);
          alert('No search result! Please try again.');
          setQuerry('');
        });
    }
  }

  return (
    <div className='App'>
      <div className='search-box'>
        <input
          className='search-bar'
          type='text'
          placeholder='Search city'
          onChange={e => setQuerry(e.target.value)}
          value={querry}
          onKeyPress={search}
        />
      </div>
      {(weather.location !== '') && (typeof weather.temp !== 'undefined') ? (
        <div className="weather-b">
          <WeatherCard
            location={weather.location}
            country={weather.country}
            temp={weather.temp}
            weather={weather.weather}
            icon={weather.icon}
          />
        </div>
      ) : ('')}
    </div>
  );
}

export default App;
