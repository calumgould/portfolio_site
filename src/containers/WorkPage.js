import React from 'react';
import designImage from 'assets/images/design_background.jpg';
import programmingImage from 'assets/images/programming_background.jpg';

import 'styles/Work.css'

const WorkPage = ({history}) => {

    const designBackground = {
        backgroundImage: `url(${designImage})`
    }

    const programmingBackground = {
        backgroundImage: `url(${programmingImage})`
    }

    return ( 
        
        <div>
            <div className='work-page'>
                <div className='half-page' 
                    onClick={() => history.push('/work/design')}
                    style={designBackground}>
                    <div className='content'>
                        <h2>Design</h2>
                    </div>
                    
                </div>
                <div className='half-page' 
                    onClick={() => history.push('/work/programming')}
                    style={programmingBackground}>
                    <div className='content'>
                        <h2>Programming</h2>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default WorkPage;