import React from 'react';
import SlideshowComponent from 'components/SlideshowComponent';
import CaterpillarPages from 'components/imports/CaterpillarPages';

import 'styles/Projects.css';

const TheVeryHungryCaterpillarPage = () => {

    return ( 
        <div>
            <div>
                <h1 className='project-header'>The Very Hungry Caterpillar</h1>
                <div className='flex-container'>
                    <img className='hero' src={require('assets/images/design_projects/hungry_caterpillar/mockups/mockup_front.png')} alt='business card mockup'/>
                    <p className='project-description'>
                    A-Level Graphic Design project to redesign and illustrate a children's book.
                    <br /><br />
                    Using my childhood favourite book, "The Very Hungry Caterpillar" as a template to dictate structure and content. I redesigned the entire book and all its elements, whilst still keeping a familiar feel to the classic.
                    <br /><br />
                    Collage was used to create the fruit, shapes and trees. Pastels were used to create the night sky background.    A combination of sand and watercolour were used to create the dirt textures. Crumpled and torn paper were used to build the background elements and text layers.
                    </p>
                </div>

            </div>
            <div>
                <h2 className='project-subheader'>Book</h2>
                <div className='two-column-grid'>
                    <img className='grid-image' src={require('assets/images/design_projects/hungry_caterpillar/mockups/mockup_inside1.png')} alt='book mockup'/>
                    <img className='grid-image' src={require('assets/images/design_projects/hungry_caterpillar/mockups/mockup_inside2.png')} alt='book mockup'/>
                    <img className='grid-image' src={require('assets/images/design_projects/hungry_caterpillar/mockups/mockup_inside3.png')} alt='book mockup'/>
                    <img className='grid-image' src={require('assets/images/design_projects/hungry_caterpillar/mockups/mockup_inside4.png')} alt='book mockup'/>
                    <img className='grid-image' src={require('assets/images/design_projects/hungry_caterpillar/mockups/mockup_inside5.png')} alt='book mockup'/>
                    <img className='grid-image' src={require('assets/images/design_projects/hungry_caterpillar/mockups/mockup_inside6.png')} alt='book mockup'/>
                </div> 
            </div>
            <div>
                <h2 className='project-subheader'>All Pages</h2>
                <SlideshowComponent slideImages={CaterpillarPages}/>
            </div>
        </div>
     );
}
 
export default TheVeryHungryCaterpillarPage;