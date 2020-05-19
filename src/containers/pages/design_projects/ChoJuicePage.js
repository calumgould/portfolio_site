import React from 'react';

import 'styles/Projects.css';

const ChoJuicePage = () => {
    return ( 
        <div>
            <div>
                <h1 className='project-header'>Cho Juice</h1>
                <div className='flex-container'>
                    <img className='hero' src={require('assets/images/design_projects/cho_juice/logo.png')} alt='cho juice logo'/>
                    <p className='project-description'>
                    Cho Juice is a brand designed from the ground up, to bring transparency to the fruit juice market, specifically targeting how the sugar content is represented on juice bottles, due to the lack of regulations for how nutritional information is labelled on all major juice brands, such as Innocent and Tropicana.
                    <br /><br />
                    At a glance these juices appear to have relatively low sugar content, when in reality you're only being shown the sugar content of a single serving, of which there can be up to 8 servings of per bottle. This makes it difficult to determine the total sugar content of any given bottle.
                    <br /><br />
                    Cho Juice brings clarity to this, by showing the total nutritional content upfront, as well as highlighting the importance of portion control, informing the consumer of their recommended daily sugar intakes and how much of it this drink makes up.
                    </p>
                </div>          
            </div>
            <div>
            <h2 className='project-subheader'>Final Design</h2>
                <img className='one-row' src={require('assets/images/design_projects/cho_juice/all_bottles.png')} alt='cho juice finished bottles'/>
            </div>
            <div>
                <h2 className='project-subheader'>Juice Bottle Labels</h2>
                <img className='one-row' src={require('assets/images/design_projects/cho_juice/label_pink.png')} alt='juice label design'/>
                <div className='flex-container'>
                    <img className='three-row' src={require('assets/images/design_projects/cho_juice/label_green.png')} alt='juice label design'/>
                    <img className='three-row' src={require('assets/images/design_projects/cho_juice/label_orange.png')} alt='juice label design'/>
                    <img className='three-row' src={require('assets/images/design_projects/cho_juice/label_purple.png')} alt='juice label design'/>
                </div>
            </div>
            <div>
                <h2 className='project-subheader'>Social Media</h2>
                <div className='flex-container'>
                    <img className='two-row' src={require('assets/images/design_projects/cho_juice/social_media/insta_profile1.png')} alt='instagram mockups'/>
                    <img className='two-row' src={require('assets/images/design_projects/cho_juice/social_media/insta_profile2.png')} alt='instagram mockups'/>
                    <img className='two-row' src={require('assets/images/design_projects/cho_juice/social_media/insta_story1.png')} alt='instagram mockups'/>
                    <img className='two-row' src={require('assets/images/design_projects/cho_juice/social_media/insta_story2.png')} alt='instagram mockups'/>
                    <img className='two-row' src={require('assets/images/design_projects/cho_juice/social_media/insta_story3.png')} alt='instagram mockups'/>
                    <img className='two-row' src={require('assets/images/design_projects/cho_juice/social_media/insta_story4.png')} alt='instagram mockups'/>
                </div>
                <img className='one-row' src={require('assets/images/design_projects/cho_juice/social_media/twitter_banner.png')} alt='twitter mockup'/>
            </div>
            <div>
                <h2 className='project-subheader'>Posters</h2>
                <img className='one-row' src={require('assets/images/design_projects/cho_juice/posters/poster_pink.png')} alt='poster mockup'/>
                <div className='flex-container'>
                    <img className='three-row' src={require('assets/images/design_projects/cho_juice/posters/poster_green.png')} alt='poster mockup'/>
                    <img className='three-row' src={require('assets/images/design_projects/cho_juice/posters/poster_orange.png')} alt='poster mockup'/>
                    <img className='three-row' src={require('assets/images/design_projects/cho_juice/posters/poster_purple.png')} alt='poster mockup'/>
                </div>
            </div>
        </div>
     );
}
 
export default ChoJuicePage;