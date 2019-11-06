import React from 'react';
import {Link} from "react-router-dom";

import './Header.css';

const Header = () => {

    const handleClick = (e) => {
        const con = document.getElementById("Header-Menu");
        const img = document.getElementById("Header-Btn-img");

        if (con.style.visibility === 'hidden') {
            img.src = 'list_close.svg';
            img.style.opacity = '0.3';
            con.style.visibility = 'visible';
        }
        else {
            img.src = 'list.svg';
            img.style.opacity = '1';
            con.style.visibility = 'hidden';
        }
    };

    const defaultMenuStyle = {
        visibility: "hidden"
    };

    return (
        <div className="Header">
            <img src='logo.png' width='40px' height='40px' alt="" className="Header-logo"/>
            <button className="Header-btn" type="button" onClick={handleClick}><img id="Header-Btn-img" src='list.svg' width='30px' height='30px' alt=""/>
                <ul id="Header-Menu" style={defaultMenuStyle}>
                    <li><Link className="Header-Link" exact to="/">HOME</Link></li>
                    <li><Link className="Header-Link" to="/About">ABOUT</Link></li>
                    <li><Link className="Header-Link" to="/Works">WORKS</Link></li>
                </ul>
            </button>
        </div>
    );
}

export default Header;
