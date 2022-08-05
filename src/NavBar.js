import React from "react";
import { NavLink } from 'react-router-dom';


function NavBar(){
    return (
        <nav className="top-nav">
            <h1>George's Notes Taker</h1>
            <div>
                <NavLink id='home-link' to='/'>Home</NavLink>
                <NavLink id='about-link' to='/about'>About</NavLink>
                <NavLink id='links' to='/links'>Links</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;