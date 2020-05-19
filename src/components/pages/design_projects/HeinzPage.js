import React from 'react';

import './node_modules/styles/Projects.css';

const HeinzPage = () => {
    return (
        <div>
            <div>
                <h1 className='project-header'>D&AD Heinz</h1>
                <div className='flex-container'>
                    <img className='hero' src={require('assets/images/design_projects/heinz/heinz_poster.png')} alt='heinz project poster'/>
                    <p className='project-description'>
                    Proposed campaign for D&AD 2019 competition brief "It has to be Heinz".
                    <br /><br />
                    To celebrate 150 years of Heinz I developed a campaign to utilise the best feature of Heinz...their ketchup. Experimenting with it in every way I could think of, most of which incredibly messy.
                    <br /><br />
                    The final designs utilised negative space to show just how iconic Heinz Ketchup is, that you can recognise it without the Heinz brand mark.
                    <br /><br />
                    Taking the iconic shape of Heinz bottles to create these forms out of just ketchup. Affirming to existing Heinz consumers and newcomers alike that Heinz Ketchup is just the best there is.
                    <br /><br />
                    <b>"It has to be Heinz."</b>
                    </p>
                </div>
            </div>
            <div>
                <h2 className='project-subheader'>Proposed Idea</h2>
                <div className='flex-container'>
                    <img className='two-row' src={require('assets/images/design_projects/heinz/heinz_slide1.png')} alt='heinz slides'/>
                    <img className='two-row' src={require('assets/images/design_projects/heinz/heinz_slide2.png')} alt='heinz slides'/>
                    <img className='two-row' src={require('assets/images/design_projects/heinz/heinz_slide3.png')} alt='heinz slides'/>
                    <img className='two-row' src={require('assets/images/design_projects/heinz/heinz_slide4.png')} alt='heinz slides'/>
                    <img className='two-row' src={require('assets/images/design_projects/heinz/heinz_slide5.png')} alt='heinz slides'/>
                    <img className='two-row' src={require('assets/images/design_projects/heinz/heinz_slide6.png')} alt='heinz slides'/>
                    <img className='two-row' src={require('assets/images/design_projects/heinz/heinz_slide7.png')} alt='heinz slides'/>
                    <img className='two-row' src={require('assets/images/design_projects/heinz/heinz_slide8.png')} alt='heinz slides'/>
                    <img className='two-row' src={require('assets/images/design_projects/heinz/heinz_slide9.png')} alt='heinz slides'/>
                    <img className='two-row' src={require('assets/images/design_projects/heinz/heinz_slide10.png')} alt='heinz slides'/>
                </div>
            </div>
        </div>
      );
}
 
export default HeinzPage;