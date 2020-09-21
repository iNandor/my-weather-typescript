import React, { useState } from 'react';
import './App.css';
import WeatherCard from './components/weather-card/weather-card';

const api: IApi = {
  key: 'bba31a65b0f6060e34b2b164249c2509',
  base: 'https://api.openweathermap.org/data/2.5/'
}

interface IApi {
  key: string,
  base: string
}

export interface IWeather {

  
  coord: {
    lon: number,
    lat: number
  },
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ],
  base: string,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
  },
  visibility: number,
  wind: {
    speed: number,
    deg: number
  },
  clouds: {
    all: number
  },
  dt: number,
  sys: {
    type: number,
    id: number,
    message: number,
    country: string,
    sunrise: number,
    sunset: number
  },
  timezone: number,
  id: number,
  name: string,
  cod: number
}

function App() {
  const [querry, setQuerry] = useState<string>('');
  const [weather, setWeather] = useState<IWeather>({
    coord: {
      lon: 0,
      lat: 0
    },
    weather: [
      {
        id: 0,
        main: "",
        description: "",
        icon: ""
      }
    ],
    base: "",
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0
    },
    visibility: 0,
    wind: {
      speed: 0,
      deg: 0
    },
    clouds: {
      all: 0
    },
    dt: 0,
    sys: {
      type: 0,
      id: 0,
      message: 0,
      country: "",
      sunrise: 0,
      sunset: 0
    },
    timezone: 0,
    id: 0,
    name: "",
    cod: 0

  });

  function search(k: any) {
    if (k.key === 'Enter') {
      console.log(k);
      fetch(`${api.base}weather?q=${querry}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuerry('');
          console.log(result);
        });
    }
  }


  return (
    <div className={(typeof weather.main != 'undefined') ? ((weather.main.temp > 20) ? 'App warm' : 'App') : 'App'}>

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
      <div className="weather-b">
        <WeatherCard
        />
      </div>
      {(typeof weather.main != 'undefined') ? (
        <>
          <div className='location-box'>
            <div className='location'>{weather.name}, {weather.sys.country}</div>
            <div className='date'>{new Date().toDateString()}</div>
          </div>
          <div className='weather-box'>
            <div className='temp'>
              {Math.round(weather.main.temp) + '°C'}
            </div>
            <div className='weather'>
              {weather.weather[0].main}
            </div>
          </div>
        </>
      ) : ('')}
    </div>
  );
}

export default App;
