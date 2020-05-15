import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Switch from 'react-switch';

import 'styles/NavBar.css';
import 'styles/Main.css';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            darkMode: true,
            logoColour: 'white',
         }
         this.handleModeChange = this.handleModeChange.bind(this)
         this.toggleMode = this.toggleMode.bind(this)
    }

    handleModeChange(checked){
        this.setState({
            darkMode: checked,
        }, this.toggleMode)
    }

    toggleMode(){
        if(this.state.darkMode === true) {
            document.documentElement.style.setProperty('--primary', '#FF0266')
            document.documentElement.style.setProperty('--secondary', '#FFFFFF')
            document.documentElement.style.setProperty('--background', '#212121')
            this.setState({
                logoColour: 'white',
            })
        } else {
            document.documentElement.style.setProperty('--primary', '#FF0266')
            document.documentElement.style.setProperty('--secondary', '#000000')
            document.documentElement.style.setProperty('--background', '#FFFFFF')
            this.setState({
                logoColour: 'black',
            })
        }
    }
    
    render() { 

        return ( 
            <div>
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
                
                <div className='toggle-switch'>
                    <p id='no-click-label'></p>
                        <Switch
                            onChange={this.handleModeChange}
                            checked={this.state.darkMode}
                            onColor='#FF0266'
                            offColor='#00CED1'
                            onHandleColor='#F8F8FF'
                            offHandleColor='#FFD700'
                            checkedIcon={false}
                            uncheckedIcon={false}
                            handleDiameter={30}
                            height={20}
                            width={48}
                            aria-labelledby='no-click-label'
                        />
                </div>

            </div>
         );
    }
}


 
export default NavBar;