import React from 'react';
import SlideshowComponent from './node_modules/components/SlideshowComponent';
import eventImages from './node_modules/components/imports/KateEventImages'

import './node_modules/styles/Projects.css';

const KateBushSymposium = () => {
    return ( 
        <div>
            <div>
                <h1 className='project-header'>Kate Bush Symposium</h1>
                <div className='flex-container'>
                    <img className='hero' src={require('assets/images/design_projects/kate_bush/kate_bush_poster.png')} alt='symposium poster'/>
                    <p className='project-description'>
                    Full brand identity for the Kate Bush Symposium, to be held in Edinburgh on 12th December 2019 at Edinburgh College of Art.
                    <br /><br />
                    The visuals are designed to appeal to Kate Bush's followers, using her iconic expressions in an abstracted, half-tone form to create a subtle background, still recognisable as Kate Bush even though heavily cropped, showing how iconic her features are.
                    <br /><br />
                    The imagery in combination with bold, vibrant text makes the post pop out to readers, and bringing a simple but effective colour palette and style that can be used across the rest of the event branding.
                    <br /><br />
                    The proposal was initially made during my time at Cosmic Collective, a student led design agency, which I ran with Lynn Jiang. After winning the pitch from all agencies, this project was continued after my graduation as freelance work.
                    </p>
                </div>
            </div>
            <div>
                <h2 className='project-subheader'>Final Designs</h2>
                <img className='one-row' src={require('assets/images/design_projects/kate_bush/kate_spreads.png')} alt='symposium poster'/>
                <img className='one-row' src={require('assets/images/design_projects/kate_bush/kate_spread1.png')} alt='symposium poster'/>
                <div className='flex-container'>
                    <img className='two-row' src={require('assets/images/design_projects/kate_bush/postcard_front.png')} alt='symposium poster'/>
                    <img className='two-row' src={require('assets/images/design_projects/kate_bush/postcard_back.png')} alt='symposium poster'/>
                    <img className='two-row' src={require('assets/images/design_projects/kate_bush/pin_vote.png')} alt='symposium poster'/>
                    <img className='two-row' src={require('assets/images/design_projects/kate_bush/pin_work.png')} alt='symposium poster'/>
                    <img className='two-row' src={require('assets/images/design_projects/kate_bush/tote_bag.png')} alt='symposium poster'/>
                </div>
            </div>
            <div>
                <h2 className='project-subheader'>The Event</h2>
                <SlideshowComponent slideImages={eventImages} />
            </div>
        </div>
     );
}
 
export default KateBushSymposium;