import React from 'react';

import 'styles/Home.css';

const Home = ({history, darkMode}) => {

    const chooseLogoColour = () => {
        if(darkMode) {
            return <img src={require('assets/images/other/logo_white.png')} alt='logo' />
        } else {
            return <img src={require('assets/images/other/logo_black.png')} alt='logo' />
        }
    }


    return ( 
        <div className='home-page'>
            <div>
                <div className='logo'>
                    {chooseLogoColour()}
                </div>

                <div className='details'>   
                    <h1>Calum Gould</h1>
                    <p>Software Developer</p>
                </div>

                <button className='button' onClick={() => history.push('/work')}>
                    Continue
                </button>
            </div>    
        </div>
     );
}
 
export default Home;