import React from 'react';
import './WeatherDetailSection.scss';

const weatherDetailSection = () => {
    return(
        <div className="weather-detail-section">
            <div className="weather-detail-section__today">
                <h4 className="label">Today</h4>
                <h4 className="linear-guage"></h4>
                <div className="high-low">
                    <span>H <span className="high-value">36</span></span>
                    <span>L <span className="high-value">16</span></span>
                </div>
            </div>
            <div className="weather-detail-section__hourly-graph"></div>
            <div className="weather-detail-section__detailed-weather-report"></div>
        </div>
    );
}

export default weatherDetailSection;