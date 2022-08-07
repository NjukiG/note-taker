import React from "react";
import { NavLink } from 'react-router-dom';


function NavBar(){
    return (
        <nav className="top-nav">
            <h1>George's Notes Taker</h1>
            <div>
                <NavLink className="navigations" id='home-link' to='/'>Home</NavLink>
                <NavLink className="navigations" id='about-link' to='/about'>About</NavLink>
                <NavLink className="navigations" id='links' to='/links'>Links</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;