import React from 'react';
import './WeatherStation.css';
import RegionAndCities from '../RegionAndCities/RegionAndCities';
import SelectedCityCard from '../SelectedCityCard/SelectedCityCard';
import WeatherDetailSection from '../WeatherDetailSection/WeatherDetailSection';

class WeatherStation extends React.Component {
    state = {
        selectedRegion: {
            region_name: 'Europe',
            states: [
                {state_name: 'Germany', capital: 'Berlin'},
                {state_name: 'France', capital: 'Paris'},
                {state_name: 'United Kingdom', capital: 'London'},
                {state_name: 'Czech Republic', capital: 'Prague'},
            ]
        }

    }
    render() {
        return (
            <div className="weather-station">
                <div className="side-menu-panel"></div>
                <div className="main-panel sections-container">
                    <div className="section section__region-and-cities">
                        <RegionAndCities selectedRegion={this.state.selectedRegion}></RegionAndCities>
                    </div>
                    <div className="section section__weather-detail">
                        <div className="selected-city-now">
                            <SelectedCityCard/>
                        </div>
                        <div className="selected-city-hourly">
                            <WeatherDetailSection/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeatherStation;