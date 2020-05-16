import React from 'react';

import storacleDemo from 'assets/images/programmingProjects/Storacle/storacle_demo.mov'


const Storacle = () => {
    return ( 
        <div>
            <h1>Storacle</h1>
            <video className='video-demo' loop autoPlay>
                <source src={storacleDemo} type='video/mp4' />
            </video>
        </div>
     );
}
 
export default Storacle;