import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Header section</h1>
            <nav>
                <div>
                    
                </div>
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