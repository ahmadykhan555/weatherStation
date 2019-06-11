import React from 'react';
import './SelectedCityCard.css';
import WeatherByDay from '../WeatherByDay/WeatherByDay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SelectedCityCard = () => {
    return(
        <div className="selected-city-card">
            <h4 className="selected-city-card__city-name">Paris, France</h4>
            <h5 className="time-now">9:30pm</h5>
            <h5 className="date">30 May</h5>
            <h6 className="day">Thursday</h6>
            <FontAwesomeIcon icon="coffee"/>
            <h6 className="temperature-now">30c</h6>
            <div className="forecast-for-week">
                <WeatherByDay/>
                <WeatherByDay/>
                <WeatherByDay/>
                <WeatherByDay/>
            </div>
        </div>
    );
}

export default SelectedCityCard;