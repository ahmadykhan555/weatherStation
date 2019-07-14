import React from 'react';
import './WeatherStation.scss';
import RegionAndCities from '../RegionAndCities/RegionAndCities';
import SelectedCityCard from '../SelectedCityCard/SelectedCityCard';
import WeatherDetailSection from '../WeatherDetailSection/WeatherDetailSection';
import SideMenu from '../SideMenu/SideMenu';

class weatherStation extends React.Component {
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
                <div className="weather-station__side-menu-panel">
                    <SideMenu></SideMenu>
                </div>
                <div className="weather-station__detail-view detail-view">
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

export default weatherStation;