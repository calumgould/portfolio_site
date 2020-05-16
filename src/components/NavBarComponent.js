import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import Switch from 'react-switch';

import 'styles/NavBar.css';

const NavBar = (props) => {

    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        if(darkMode === true) {
            document.documentElement.style.setProperty('--primary', '#FF0266')
            document.documentElement.style.setProperty('--secondary', '#FFFFFF')
            document.documentElement.style.setProperty('--background', '#212121')
        } else {
            document.documentElement.style.setProperty('--primary', '#FF0266')
            document.documentElement.style.setProperty('--secondary', '#000000')
            document.documentElement.style.setProperty('--background', '#FFFFFF')
        }
        props.getToggleState(darkMode)
    }, [darkMode, props])

    const handleModeChange = (checked) => {
        setDarkMode(checked)
    }

    const chooseLogoColour = () => {
        if(darkMode) {
            return <img src={require('assets/images/logo_white.png')} alt='logo' />
        } else {
            return <img src={require('assets/images/logo_black.png')} alt='logo' />
        }
    }
    
    return ( 
        <div>
            <ul className='nav'>
                <li>
                    {chooseLogoColour()}
                </li>
                <li>
                    <NavLink 
                    className='link'                      activeClassName='link-active'
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
                <li className='toggle-button'>
                    <p id='no-click-label'></p>
                        <Switch
                            onChange={handleModeChange}
                            checked={darkMode}
                            onColor='#FF0266'
                            offColor='#D3D3D3'
                            onHandleColor='#F8F8FF'
                            offHandleColor='#212121'
                            checkedIcon={false}
                            uncheckedIcon={false}
                            handleDiameter={30}
                            height={20}
                            width={48}
                            aria-labelledby='no-click-label'
                        />
                </li>
            </ul>
        </div>
    );
}


 
export default NavBar;