import React from 'react';
import SlideshowComponent from 'components/SlideshowComponent';
import merchImages from 'components/subComponents/MerchImages';

const GarvaldArtistsPage = () => {
    return ( 
        <div>
            <div>
                <h1>Garvald Artists</h1>
                <img className='hero' src={require('assets/images/designProjects/GarvaldArtists/mockups/mockup_booklet_spreads.jpg')} alt='booklet spreads'/>
                <p>
                Garvald Artists is one of 21 supported workshops in Edinburgh. Their purpose is to support adults with a learning disability and develop their art, craft and catering skills.
                <br /><br />
                Proposed design for how artists at Garvald could introduce their work to the art and design world.
                <br /><br />
                Working in a two person team, we overhauled the current Garvald Artists website, to have a more creative feel, featuring work by the artists themselves. Collating all the proposed changes in a concise publication to give to the client.
                <br /><br />
                The inclusion of an online shop in the website gives the artists the tools to begin to sell their work through a commercial medium, showing examples of how their art could be implemented on different products.
                </p>
            </div>
            <div>
                <h2>Designs</h2>
                <div className='flex-container'>
                    <img className='two-row' src={require('assets/images/designProjects/GarvaldArtists/mockups/mockup_window.jpg')} alt='booklet spreads'/>
                    <img className='two-row' src={require('assets/images/designProjects/GarvaldArtists/mockups/mockup_home.jpg')} alt='booklet spreads'/>
                    <img className='two-row' src={require('assets/images/designProjects/GarvaldArtists/mockups/mockup_merch.jpg')} alt='merch page'/>
                    <img className='two-row' src={require('assets/images/designProjects/GarvaldArtists/mockups/mockup_merch_detail.jpg')} alt='merch detail page'/>
                    <img className='two-row' src={require('assets/images/designProjects/GarvaldArtists/mockups/mockup_social_media.jpg')} alt='social media mockup'/>
                    <img className='two-row' src={require('assets/images/designProjects/GarvaldArtists/mockups/mockup_booklet1.jpg')} alt='booklet inside'/>
                    <img className='two-row' src={require('assets/images/designProjects/GarvaldArtists/mockups/mockup_booklet2.jpg')} alt='booklet inside'/>
                </div>
            </div>
            <div>
                <h2>Publication Spreads</h2>
                <div className='flex-container'>
                    publication spread images
                </div>
            </div>
            <div>
                <h2>Merchandise</h2>
                <SlideshowComponent slideImages={merchImages} />
            </div>
        </div>
     );
}
 
export default GarvaldArtistsPage;