import React from 'react';
import {NavLink} from 'react-router-dom';

import 'styles/NavBar.css';

const NavBar = () => {
    return ( 
        <ul className='nav'>
            <li>
                <NavLink 
                className='link'
                activeClassName='link-active'
                to="/" exact>
                Home
                </NavLink>
            </li>
            <li>
                <NavLink 
                className='link'
                activeClassName='link-active' 
                to="/work">
                Work
                </NavLink>
            </li>
            <li>
                <NavLink 
                className='link'
                activeClassName='link-active'
                to="/about">
                About
                </NavLink>
            </li>
        </ul>
     );
}
 
export default NavBar;