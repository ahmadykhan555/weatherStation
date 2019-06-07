import React from 'react';
import './WeatherStation.css';
import RegionAndCities from '../RegionAndCities/RegionAndCities';
import SelectedCityCard from '../SelectedCityCard/SelectedCityCard';


class WeatherStation extends React.Component {
    render() {
        return (
            <div className="weather-station">
                <div className="side-menu-panel"></div>
                <div className="main-panel sections-container">
                    <div className="section section__region-and-cities">
                        <RegionAndCities></RegionAndCities>
                    </div>
                    <div className="section section__weather-detail">
                        <div className="selected-city-now">
                            <SelectedCityCard/>
                        </div>
                        <div className="selected-city-hourly"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeatherStation;