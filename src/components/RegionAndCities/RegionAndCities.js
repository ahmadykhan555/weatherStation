import React from 'react';
import './RegionAndCities.css';
import Hexagon from '../Hexagon/Hexagon';
const RegionAndCities = (props) => {
    return(
        <div className="region-and-cities">
            <div className="cities-container">
                {props.selectedRegion.states.map(state => <Hexagon cityName={state.capital}></Hexagon>)}
            </div>
            <div className="select-region">
                <div className="label">Region</div>
                <div className="region-dropdown">Drop down</div>
                <div className="region-search">
                    <input type="text" placeholder="Search Region"/>
                </div>
            </div>
        </div>
    );
}

export default RegionAndCities;