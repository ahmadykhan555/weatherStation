import React from 'react';
import './Hexagon.css';

const hexagon = (props) => {
    return(
        <div className="cell">
            <div className="hexagon"></div>
            <div className="weather-at-glance">
                <h4 className="city-name">{props.cityName}</h4>
                <h5 className="weather-now">Sunny</h5>
                <h3 className="temperature">30c</h3>
            </div>
        </div>
    );
}

export default hexagon;