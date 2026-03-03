// src/Header.js
import React from 'react';
import '../css/Header.css'; // Import the CSS file
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="logo">sunvio.video</div>
            <nav className="nav">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </header>
    );
}

export default Header;