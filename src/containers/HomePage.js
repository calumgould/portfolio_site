import React from 'react';

import 'styles/Home.css';

const Home = ({history}) => {
    return ( 
        <div className='home-page'>
            <div>
                <div className='logo'>
                    <img src={require('assets/images/logo_white.png')}alt='logo' />
                </div>

                <div className='details'>   
                    <h1>Calum Gould</h1>
                    <h2>Software Developer</h2>
                </div>

                <button className='button' onClick={() => history.push('/Work')}>
                    Continue
                </button>
            </div>    
        </div>
     );
}
 
export default Home;