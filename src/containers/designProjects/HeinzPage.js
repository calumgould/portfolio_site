import React from 'react';

const HeinzPage = () => {
    return (
        <div>
            <div>
                <h1 className='project-header'>D&AD Heinz</h1>
                <div className='flex-container'>
                    <img className='hero' src={require('assets/images/designProjects/Heinz/heinz_poster.jpg')} alt='heinz project poster'/>
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
                    <img className='two-row' src={require('assets/images/designProjects/Heinz/heinz_slide1.jpg')} alt='heinz slides'/>
                    <img className='two-row' src={require('assets/images/designProjects/Heinz/heinz_slide2.jpg')} alt='heinz slides'/>
                    <img className='two-row' src={require('assets/images/designProjects/Heinz/heinz_slide3.jpg')} alt='heinz slides'/>
                    <img className='two-row' src={require('assets/images/designProjects/Heinz/heinz_slide4.jpg')} alt='heinz slides'/>
                    <img className='two-row' src={require('assets/images/designProjects/Heinz/heinz_slide5.jpg')} alt='heinz slides'/>
                    <img className='two-row' src={require('assets/images/designProjects/Heinz/heinz_slide6.jpg')} alt='heinz slides'/>
                    <img className='two-row' src={require('assets/images/designProjects/Heinz/heinz_slide7.jpg')} alt='heinz slides'/>
                    <img className='two-row' src={require('assets/images/designProjects/Heinz/heinz_slide8.jpg')} alt='heinz slides'/>
                    <img className='two-row' src={require('assets/images/designProjects/Heinz/heinz_slide9.jpg')} alt='heinz slides'/>
                    <img className='two-row' src={require('assets/images/designProjects/Heinz/heinz_slide10.jpg')} alt='heinz slides'/>
                </div>
            </div>
        </div>
      );
}
 
export default HeinzPage;