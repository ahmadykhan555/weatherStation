import React from 'react'
import { FaHome, FaUserCircle, FaCog } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import './SideMenu.scss';
const sideMenu = () => {
    return(
        <div className="side-menu">
            <button className="side-menu__tab side-menu__tab--home tab-active">
                <FaHome/>
            </button>
            <button className="side-menu__tab side-menu__tab--location">
                <MdLocationOn/>
            </button>
            <button className="side-menu__tab side-menu__tab--profile">
                <FaUserCircle/>
            </button>
            <button className="side-menu__tab side-menu__tab--settings">
                <FaCog/>
            </button>
        </div>
    );
}
export default sideMenu;