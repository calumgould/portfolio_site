import React from 'react';
import 'styles/Main.css'
import SlideshowComponent from 'components/SlideshowComponent';
import CaterpillarPages from 'components/subComponents/CaterpillarPages';

const TheVeryHungryCaterpillarPage = () => {

    return ( 
        <div>
            <div>
                <h1>The Very Hungry Caterpillar</h1>
                <img className='hero' src={require('assets/images/designProjects/HungryCaterpillar/mockups/mockup_front.jpg')} alt='business card mockup'/>
                <p>
                A-Level Graphic Design project to redesign and illustrate a children's book.
                <br /><br />
                Using my childhood favourite book, "The Very Hungry Caterpillar" as a template to dictate structure and content. I redesigned the entire book and all its elements, whilst still keeping a familiar feel to the classic.
                <br /><br />
                Collage was used to create the fruit, shapes and trees. Pastels were used to create the night sky background.    A combination of sand and watercolour were used to create the dirt textures. Crumpled and torn paper were used to build the background elements and text layers.
                </p>
            </div>
            <div>
                <h2>Book</h2>
                <div className='two-column-grid'>
                    <img className='grid-image' src={require('assets/images/designProjects/HungryCaterpillar/mockups/mockup_inside1.jpg')} alt='book mockup'/>
                    <img className='grid-image' src={require('assets/images/designProjects/HungryCaterpillar/mockups/mockup_inside2.jpg')} alt='book mockup'/>
                    <img className='grid-image' src={require('assets/images/designProjects/HungryCaterpillar/mockups/mockup_inside3.jpg')} alt='book mockup'/>
                    <img className='grid-image' src={require('assets/images/designProjects/HungryCaterpillar/mockups/mockup_inside4.jpg')} alt='book mockup'/>
                    <img className='grid-image' src={require('assets/images/designProjects/HungryCaterpillar/mockups/mockup_inside5.jpg')} alt='book mockup'/>
                    <img className='grid-image' src={require('assets/images/designProjects/HungryCaterpillar/mockups/mockup_inside6.jpg')} alt='book mockup'/>
                </div> 
            </div>
            <div className='div'>
                <h2>All Pages</h2>
                <SlideshowComponent slideImages={CaterpillarPages}/>
            </div>
        </div>
     );
}
 
export default TheVeryHungryCaterpillarPage;