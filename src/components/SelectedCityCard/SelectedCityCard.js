import React from 'react';
import './SelectedCityCard.css';
import WeatherByDay from '../WeatherByDay/WeatherByDay';
import { WiDaySunny } from 'react-icons/wi';

const SelectedCityCard = () => {
    return(
        <div className="selected-city-card">
            <div className="selected-city-card__content">
                <h4 className="selected-city-card__city-name text-item">Paris, France</h4>
                <h5 className="time-now text-item">9:30pm</h5>
                <h5 className="date text-item">30 May</h5>
                <h6 className="day text-item">Thursday</h6>
                <div className="weather-icon"><WiDaySunny/></div>
                <h6 className="temperature-now">30c</h6>
                <div className="forecast-for-week">
                    <WeatherByDay/>
                    <WeatherByDay/>
                    <WeatherByDay/>
                    <WeatherByDay/>
                </div>
            </div>
        </div>
    );
}

export default SelectedCityCard;