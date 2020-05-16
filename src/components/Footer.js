import React from 'react';

import 'styles/Footer.css'

const Footer = ({darkMode}) => {

    const chooseLogos = () => {
        if(darkMode) {
            return (
                <div>
                    <a href='https://www.instagram.com/calum_gould/' target='_blank' rel='noopener noreferrer'>
                        <img src={require('assets/images/insta_white.png')} alt='instagram logo white' />
                    </a>
                    <a href='https://github.com/calumgould' target='_blank' rel='noopener noreferrer'>
                        <img src={require('assets/images/github_white.png')} alt='github logo white' />
                    </a>
                </div>
            )
        } else {
            return (
                <div>
                    <a href='https://www.instagram.com/calum_gould/' target='_blank' rel='noopener noreferrer'>
                        <img src={require('assets/images/insta_black.png')} alt='instagram logo black' />
                    </a>
                    <a href='https://github.com/calumgould' target='_blank' rel='noopener noreferrer'>
                        <img src={require('assets/images/github_black.png')} alt='github logo black' />
                    </a>
                </div>
            )
        }
    }

    return ( 
        <footer className='footer'>
            {chooseLogos()}
        </footer>
     );
}
 
export default Footer;