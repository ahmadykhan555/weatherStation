import React from 'react';
import './RegionAndCities.css';
import Hexagon from '../Hexagon/Hexagon';
const RegionAndCities = (props) => {
    return(
        <div className="region-and-cities">
            <div className="region-and-cities__cities-container">
                {props.selectedRegion.states.map(state => <Hexagon cityName={state.capital}></Hexagon>)}
            </div>
            <div className="region-and-cities__select-region select-region">
                <div className="select-region__label">Region</div>
                <div className="select-region__region-dropdown">Drop down</div>
                <div className="select-region__region-search">
                    <input type="text" placeholder="Search Region"/>
                </div>
            </div>
        </div>
    );
}

export default RegionAndCities;