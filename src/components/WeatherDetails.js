import React from 'react';

const WeatherDetails = ({ feelsLike, humidity, windSpeed }) => {
  return (
    <div className="bottom">
      <div className="feels">
        {feelsLike ? <p className='bold'>{feelsLike.toFixed()}°F</p> : null}
        <p>Feels Like</p>
      </div>
      <div className="humidity">
        {humidity ? <p className='bold'>{humidity}%</p> : null}
        <p>Humidity</p>
      </div>
      <div className="wind">
        {windSpeed ? <p className='bold'>{windSpeed.toFixed()} MPH</p> : null}
        <p>Wind Speed</p>
      </div>
    </div>
  );
};

export default WeatherDetails;
