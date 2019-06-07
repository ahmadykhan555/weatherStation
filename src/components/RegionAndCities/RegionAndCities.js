import React from 'react';
import './RegionAndCities.css';
import Hexagon from '../Hexagon/Hexagon';
const RegionAndCities = () => {
    return(
        <div className="region-and-cities">
            <div className="cities-container">
                <Hexagon></Hexagon>
                <Hexagon></Hexagon>
                <Hexagon></Hexagon>
                <Hexagon></Hexagon>
                <Hexagon></Hexagon>
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