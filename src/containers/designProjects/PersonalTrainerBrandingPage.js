import React from 'react';
import 'styles/Main.css';

const PersonalTrainerBrandingPage = () => {
    return (
        <div>
            <div>
                <h1>Personal Trainer Branding</h1>
                <img className='hero' src={require('assets/images/designProjects/PersonalTrainer/cards_mockup.jpg')} alt='business card mockup'/>
                <p>
                Logo, business card and social media branding design for Clara Nimmo. A personal trainer based at Pure Gym Quartermile, Edinburgh.
                <br /><br />
                Clara's previous business card was very dated and she wanted a modern, vibrant revamp of her personal branding, to tie in with a new Instagram account that she was planning on creating.
                <br /><br />
                Using reference sketches that Clara provided for what she envisioned for the branding. I designed the business card and social media icons & templates that she could use to help structure posts and keep the visuals consistent with her branding for any content.
                </p>
            </div>
            <div>
                <h2>Social Media</h2>
                <div className='flex-container'>
                    <img className='two-row' src={require('assets/images/designProjects/PersonalTrainer/social_media1.jpg')} alt='social media profile mockup'/>
                    <img className='two-row' src={require('assets/images/designProjects/PersonalTrainer/social_media2.jpg')} alt='social media profile mockup'/>
                </div>
            </div>
            <div>
                <h2>Designs</h2>
                <div className='flex-container'>
                    <img className='three-row' src={require('assets/images/designProjects/PersonalTrainer/card_front.jpg')} alt='business card front design'/>
                    <img className='three-row' src={require('assets/images/designProjects/PersonalTrainer/card_back.jpg')} alt='business card back design'/>
                    <img className='three-row' src={require('assets/images/designProjects/PersonalTrainer/pattern.jpg')} alt='background pattern'/>
                </div>
            </div>
        </div>
    );
}
 
export default PersonalTrainerBrandingPage;