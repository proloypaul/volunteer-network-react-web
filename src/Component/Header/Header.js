import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <div>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/donation">Donation</NavLink>
                    <NavLink to="/event">Events</NavLink>
                    <NavLink to="/register">Register</NavLink>
                    <NavLink to="/admin">Admin</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;