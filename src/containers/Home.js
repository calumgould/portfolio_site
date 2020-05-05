import React from 'react';

import 'styles/Home.css';

const Home = ({history}) => {
    return ( 
        <div>
            <img src={require('assets/images/logo_black.png')}alt='logo' />
            <h1>Calum Gould</h1>
            <h2>Software Developer</h2>
            <button onClick={() => history.push('/Work')}>
                Continue
            </button>
        </div>
     );
}
 
export default Home;