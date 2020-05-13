import React from 'react';
import designImage from 'assets/images/design_background.jpg';
import programmingImage from 'assets/images/programming_background.jpg';

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
                    <h2>Design</h2>
                </div>
                <div className='half-page' 
                    onClick={() => history.push('/work/programming')}
                    style={programmingBackground}>
                    <h2>Programming</h2>
                </div>
            </div>
        </div>
     );
}
 
export default WorkPage;