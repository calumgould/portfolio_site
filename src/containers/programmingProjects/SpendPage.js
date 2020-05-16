import React from 'react';

import spendDemo from 'assets/images/programmingProjects/Spend/spend_demo.mov'


const SpendPage = () => {
    return ( 
        <div>
            <h1>Spend</h1>
            <video className='video-demo' loop autoPlay>
                <source src={spendDemo} type='video/mp4' />
            </video>
        </div>
     );
}
 
export default SpendPage;