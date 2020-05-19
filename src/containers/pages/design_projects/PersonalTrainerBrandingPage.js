import React from 'react';

import 'styles/Projects.css';

const PersonalTrainerBrandingPage = () => {
    return (
        <div>
            <div>
                <h1 className='project-header'>Personal Trainer Branding</h1>
                <div className='flex-container'>
                    <img className='hero' src={require('assets/images/design_projects/personal_trainer/cards_mockup.png')} alt='business card mockup'/>
                    <p className='project-description'>
                    Logo, business card and social media branding design for Clara Nimmo. A personal trainer based at Pure Gym Quartermile, Edinburgh.
                    <br /><br />
                    Clara's previous business card was very dated and she wanted a modern, vibrant revamp of her personal branding, to tie in with a new Instagram account that she was planning on creating.
                    <br /><br />
                    Using reference sketches that Clara provided for what she envisioned for the branding. I designed the business card and social media icons and templates that she could use to help structure posts and keep the visuals consistent with her branding for any content.
                    </p>
                </div>
            </div>
            <div>
                <h2 className='project-subheader'>Social Media</h2>
                <div className='flex-container'>
                    <img className='two-row' src={require('assets/images/design_projects/personal_trainer/social_media1.png')} alt='social media profile mockup'/>
                    <img className='two-row' src={require('assets/images/design_projects/personal_trainer/social_media2.png')} alt='social media profile mockup'/>
                </div>
            </div>
            <div>
                <h2 className='project-subheader'>Designs</h2>
                <div className='flex-container'>
                    <img className='three-row' src={require('assets/images/design_projects/personal_trainer/card_front.png')} alt='business card front design'/>
                    <img className='three-row' src={require('assets/images/design_projects/personal_trainer/card_back.png')} alt='business card back design'/>
                    <img className='three-row' src={require('assets/images/design_projects/personal_trainer/pattern.png')} alt='background pattern'/>
                </div>
            </div>
        </div>
    );
}
 
export default PersonalTrainerBrandingPage;