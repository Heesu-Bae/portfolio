import React from 'react';
import {NavLink} from "react-router-dom";

import './Header.css';

const Header = () => {
    const activeStyle = {
        color: 'red',
        fontWeight: 'bold'
    };

    return (
        <div className="Header">
            <img src='logo.png' width='40px' height='40px' alt="" className="Header-logo"/>
            <button className="Header-btn"><img src='list.svg' width='40px' height='40px' alt=""/></button>
        </div>
    );
}

export default Header;
