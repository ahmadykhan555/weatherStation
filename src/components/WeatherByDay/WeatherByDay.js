import React from 'react';
import './WeatherByDay.scss';
import { WiDaySunny } from 'react-icons/wi';

const weatherByDay = () => {
    return(
        <div className="weather-by-day"> 
            <h5 className="weather-by-day__day">Monday</h5>
            <h6 className="weather-by-day__high">40</h6>
            <h6 className="weather-by-day__low">36</h6>
            <div className="weather-by-day__icon"><WiDaySunny/></div>
        </div>
    );
}

export default weatherByDay;