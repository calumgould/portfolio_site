import React from 'react';

import 'styles/Footer.css'

const Footer = ({darkMode}) => {

    const chooseLogos = () => {
        if(darkMode) {
            return (
                <div>
                    <img src={require('assets/images/insta_white.png')} alt='instagram logo white' />
                    <img src={require('assets/images/github_white.png')} alt='github logo white' />
                </div>
            )
        } else {
            return (
                <div>
                    <img src={require('assets/images/insta_black.png')} alt='instagram logo black' />
                    <img src={require('assets/images/github_black.png')} alt='github logo black' />
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