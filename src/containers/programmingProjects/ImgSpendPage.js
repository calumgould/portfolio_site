import React from 'react';

import imgSpendDemo from 'assets/images/programmingProjects/ImgSpend/imgSpend_demo.mov'

const ImgSpend = () => {
    return ( 
        <div>
            <h1>ImgSpend</h1>
            <video className='video-demo' loop autoPlay>
                <source src={imgSpendDemo} type='video/mp4' />
            </video>
        </div>
     );
}
 
export default ImgSpend;