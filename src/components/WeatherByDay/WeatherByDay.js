import React from 'react';
import './WeatherByDay.css';

const WeatherByDay = () => {
    return(
        <div className="weather-by-day">
            <h5 className="day">Monday</h5>
            <h6 className="high">40</h6>
            <h6 className="low">36</h6>
            <div className="weather-icon"></div>
        </div>
    );
}

export default WeatherByDay;