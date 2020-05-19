import React from 'react';

import './node_modules/styles/Projects.css';

const LoganAirPage = () => {
    return ( 
        <div>
            <div>
                <h1 className='project-header'>Logan Air</h1>
                <div className='flex-container'>
                    <img className='hero' src={require('assets/images/design_projects/logan_air/logo_banner.png')} alt='logan air logo'/>
                    <p className='project-description'>
                    Brand redesign concept for Loganair, Scotland's biggest airline est 1962.
                    <br /><br />
                    A fresh, modern take on the Loganair brand, with the aim of bringing it up to standard with major airlines across the UK.
                    <br /><br />
                    This new design would allow the airline to branch outside of Scotland by removing the overly tartan aesthetic and instead taking the existing colour palette to create a whole new identity, without straying too far from the core brand.
                    <br /><br />
                    This included concepts for aeroplane livery, tickets, advertisements, billboards, uniforms, tickets, pillows and stationary.
                    </p>
                </div>
            </div>
            <div>
                <h2 className='project-subheader'>Livery</h2>
                <img className='one-row' src={require('assets/images/design_projects/logan_air/airplane_mockup.png')} alt='airplane branding mockup'/>
            </div>
            <div>
                <h2 className='project-subheader'>Old vs New</h2>
                <div className='flex-container'>
                    <img className='two-row' src={require('assets/images/design_projects/logan_air/logo_banner.png')} alt='logan air logo'/>
                    <img className='two-row' src={require('assets/images/design_projects/logan_air/old_logo.png')} alt='logan air old logo'/>
                </div>
            </div>
            <div>
                <h2 className='project-subheader'>Designs</h2>
                <div className='two-column-grid'>
                    <img className='grid-image' src={require('assets/images/design_projects/logan_air/billboard.png')} alt='billboard branding'/>
                    <img className='grid-image' src={require('assets/images/design_projects/logan_air/bus_stop.png')} alt='bus stop branding'/>
                    <img className='grid-image' src={require('assets/images/design_projects/logan_air/ticket.png')} alt='ticket branding'/>
                    <img className='grid-image' src={require('assets/images/design_projects/logan_air/flag.png')} alt='flag branding'/>
                    <img className='grid-image' src={require('assets/images/design_projects/logan_air/neck_wrap_dashes.png')} alt='neck wrap'/>
                    <img className='grid-image' src={require('assets/images/design_projects/logan_air/neck_wrap_stripes.png')} alt='neck wrap branding'/>
                    <img className='grid-image' src={require('assets/images/design_projects/logan_air/skirt_dashes.png')} alt='skirt branding'/>
                    <img className='grid-image' src={require('assets/images/design_projects/logan_air/skirt_stripes.png')} alt='skirt branding'/>
                    <img className='grid-image' src={require('assets/images/design_projects/logan_air/pillow_dashes.png')} alt='pillow branding'/>
                    <img className='grid-image' src={require('assets/images/design_projects/logan_air/pillow_stripes.png')} alt='pillow branding'/>
                    <img className='grid-image' src={require('assets/images/design_projects/logan_air/tie_dashes.png')} alt='tie branding'/>
                    <img className='grid-image' src={require('assets/images/design_projects/logan_air/tie_stripes.png')} alt='tie branding'/>
                </div>
            </div>
        </div>
     );
}
 
export default LoganAirPage;