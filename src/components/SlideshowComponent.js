import React from 'react';
import {Fade} from 'react-slideshow-image';
import 'styles/Slideshow.css'

const SlideshowComponent = ({slideImages}) => {

    const fadeProperties = {
        duration: 3000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
    }

    const generateSlides = slideImages.map((image, index) => {
        return (
            <div className='each-fade' key={index}>
                <div className='image-container'>
                    <img src={image} alt='slideshow'/>
                </div>
            </div>
        )
    })

    return ( 
        <div className='slide-container'>
            <Fade {...fadeProperties}>
                {generateSlides}
            </Fade>
        </div>
     );
}
 
export default SlideshowComponent;