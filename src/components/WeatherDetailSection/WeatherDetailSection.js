import React from 'react';
import './WeatherDetailSection.css';

const WeatherDetailSection = () => {
    return(
        <div className="weather-detail-section">
            <div className="section-today">
                <h4 className="today-label">Today</h4>
                <h4 className="linear-guage"></h4>
                <div className="high-low">
                    <span>H <span className="high-value">36</span></span>
                    <span>L <span className="high-value">16</span></span>
                </div>
            </div>
            <div className="hourly-graph"></div>
            <div className="detailed-weather-report"></div>
        </div>
    );
}

export default WeatherDetailSection;