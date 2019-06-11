import React from 'react';
import './Hexagon.css';

const Hexagon = (props) => {
    return(
        <div className="cell">
            <div className="hexagon"></div>
            <div className="weather-at-glance">
                <div className="city-name">{props.cityName}</div>
                <div className="weather-now">Sunny</div>
                <div className="temperature">30c</div>
            </div>
        </div>
    );
}

export default Hexagon;