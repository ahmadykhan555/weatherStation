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
                <div className="weather-station__side-menu-panel"></div>
                <div className="weather-stations__detail-view detail-view">
                    <div className="detail-view__region-panel">
                        <RegionAndCities selectedRegion={this.state.selectedRegion}></RegionAndCities>
                    </div>
                    <div className="detail-view__weather-today-panel weather-today">
                        <div className="weather-today__selected-city">
                            {<SelectedCityCard/>}
                        </div>
                        <div className="weather-today__hourly">
                            {<WeatherDetailSection/>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeatherStation;