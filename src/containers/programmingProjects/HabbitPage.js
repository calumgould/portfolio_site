import React from 'react';

import habbitDemo from 'assets/images/programmingProjects/Habbit/habbit_demo.mov'
import 'styles/Projects.css'

const Habbit = () => {
    return (   
        <div>
            <h1>Habbit</h1>
            <video className='video-demo' loop autoPlay>
                <source src={habbitDemo} type='video/mp4' />
            </video>
        </div>
     );
}
 
export default Habbit;