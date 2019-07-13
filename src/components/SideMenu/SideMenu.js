import React from 'react'
import { FaHome, FaUserCircle, FaCog } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import './SideMenu.css';
const sideMenu = () => {
    return(
        <div className="side-menu">
            <button className="side-menu-tab side-menu-tab-home">
                <FaHome/>
            </button>
            <button className="side-menu-tab side-menu-tab-location">
                <MdLocationOn/>
            </button>
            <button className="side-menu-tab side-menu-tab-profile">
                <FaUserCircle/>
            </button>
            <button className="side-menu-tab side-menu-tab-settings">
                <FaCog/>
            </button>
        </div>
    );
}
export default sideMenu;