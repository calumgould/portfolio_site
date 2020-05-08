import React from 'react';
import SlideshowComponent from 'components/SlideshowComponent';
import eventImages from 'components/subComponents/KateEventImages'

const KateBushSymposium = () => {
    return ( 
        <div>
            <div>
                <h1>Kate Bush Symposium</h1>
                <img className='hero' src={require('assets/images/designProjects/KateBush/kate_bush_poster.jpg')} alt='symposium poster'/>
                <p>
                Freelance project for the University of Edinburgh
                <br /><br />
                Full brand identity for the Kate Bush Symposium, to be held in Edinburgh on 12th December 2019 at Edinburgh College of Art.
                <br /><br />
                The visuals are designed to appeal to Kate Bush's followers, using her iconic expressions in an abstracted, half-tone form to create a subtle background, still recognisable as Kate Bush even though heavily cropped, showing how iconic her features are.
                <br /><br />
                The imagery in combination with bold, vibrant text makes the post pop out to readers, and bringing a simple but effective colour palette and style that can be used across the rest of the event branding.
                <br /><br />
                The proposal was initially made during my time at Cosmic Collective, a student led design agency, which I ran with Lynn Jiang. After winning the pitch from all agencies, this project was continued after my graduation as freelance work.
                </p>
            </div>
            <div>
                <h2>Final Designs</h2>
                <img className='one-row' src={require('assets/images/designProjects/KateBush/kate_spreads.jpg')} alt='symposium poster'/>
                <img className='one-row' src={require('assets/images/designProjects/KateBush/kate_spread1.jpg')} alt='symposium poster'/>
                <div className='flex-container'>
                    <img className='two-row' src={require('assets/images/designProjects/KateBush/postcard_front.jpg')} alt='symposium poster'/>
                    <img className='two-row' src={require('assets/images/designProjects/KateBush/postcard_back.jpg')} alt='symposium poster'/>
                    <img className='two-row' src={require('assets/images/designProjects/KateBush/pin_vote.jpg')} alt='symposium poster'/>
                    <img className='two-row' src={require('assets/images/designProjects/KateBush/pin_work.jpg')} alt='symposium poster'/>
                    <img className='two-row' src={require('assets/images/designProjects/KateBush/tote_bag.jpg')} alt='symposium poster'/>
                </div>
            </div>
            <div>
                <h2>The Event</h2>
                <SlideshowComponent slideImages={eventImages} />
            </div>
        </div>
     );
}
 
export default KateBushSymposium;