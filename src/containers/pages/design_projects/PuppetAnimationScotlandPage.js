import React from 'react';
import SlideshowComponent from 'components/SlideshowComponent';
import PASPages from 'components/imports/PASPages';

import 'styles/Projects.css';

const PuppetAnimationScotlandPage = () => {
    return ( 
        <div>
            <div>
                <h1 className='project-header'>Puppet Animation Scotland</h1>
                <div className='flex-container'>
                    <img className='hero' src={require('assets/images/design_projects/puppet_animation/mockups/mockup_inside1.png')} alt='puppet animation spreads'/>
                    <p className='project-description'>
                    Puppet Animation Scotland brand overhaul to bring all their existing events and workshops into one concise publication to be given out to potential clients/event attendees to showcase  Puppet Animation Scotland.
                    <br /><br />
                    I took the raw form of puppetry as the basis for my design - shadows. Splitting shadows into their raw components through print CMY (Cyan, Magenta, Yellow)
                    <br /><br />
                    This created a colourful, vibrant design that delivers all the essential information and also has the aesthetic that audiences of all age ranges could appreciate and interact with.
                    </p>
                </div>
                
            </div>
            <div>
                <h2 className='project-subheader'>Designs</h2>
                <img className='one-row' src={require('assets/images/design_projects/puppet_animation/mockups/mockup_cover.png')} alt='front cover'/>
                <div className='flex-container'>
                    <img className='two-row' src={require('assets/images/design_projects/puppet_animation/mockups/mockup_inside2.png')} alt='inside pages'/>
                    <img className='two-row' src={require('assets/images/design_projects/puppet_animation/mockups/mockup_inside3.png')} alt='inside pages'/>     
                </div>  
                <img className='one-row' src={require('assets/images/design_projects/puppet_animation/mockups/mockup_poster.png')} alt='poster'/>
            </div>
            <div>
                <h2 className='project-subheader'>All Pages</h2>
                <SlideshowComponent slideImages={PASPages}/>
            </div>
        </div>
     );
}
 
export default PuppetAnimationScotlandPage;