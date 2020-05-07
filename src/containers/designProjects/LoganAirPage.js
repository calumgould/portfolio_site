import React from 'react';
import 'styles/Main.css';

const LoganAirPage = () => {
    return ( 
        <div>
            <div>
                <h1>Logan Air</h1>
                <img className='hero' src={require('assets/images/designProjects/LoganAir/logo_banner.jpg')} alt='logan air logo'/>
                <p>
                Brand redesign concept for Loganair, Scotland's biggest airline est 1962.
                <br /><br />
                A fresh, modern take on the Loganair brand, with the aim of bringing it up to standard with major airlines across the UK.
                <br /><br />
                This new design would allow the airline to branch outside of Scotland by removing the overly tartan aesthetic and instead taking the existing colour palette to create a whole new identity, without straying too far from the core brand.
                <br /><br />
                This included concepts for aeroplane livery, tickets, advertisements, billboards, uniforms, tickets, pillows and stationary.
                </p>
            </div>
            <div>
                <img className='one-row' src={require('assets/images/designProjects/LoganAir/airplane_mockup.jpg')} alt='airplane branding mockup'/>
            </div>
            <div>
                <h2>Old vs New</h2>
                <div className='flex-container'>
                    <img className='two-row' src={require('assets/images/designProjects/LoganAir/logo_banner.jpg')} alt='logan air logo'/>
                    <img className='two-row' src={require('assets/images/designProjects/LoganAir/old_logo.jpg')} alt='logan air old logo'/>
                </div>
            </div>
            <div>
                <h2>Designs</h2>
                <div className='two-column-grid'>
                    <img className='grid-image' src={require('assets/images/designProjects/LoganAir/billboard.jpg')} alt='billboard branding'/>
                    <img className='grid-image' src={require('assets/images/designProjects/LoganAir/bus_stop.jpg')} alt='bus stop branding'/>
                    <img className='grid-image' src={require('assets/images/designProjects/LoganAir/ticket.png')} alt='ticket branding'/>
                    <img className='grid-image' src={require('assets/images/designProjects/LoganAir/flag.jpg')} alt='flag branding'/>
                    <img className='grid-image' src={require('assets/images/designProjects/LoganAir/neck_wrap_dashes.jpg')} alt='neck wrap'/>
                    <img className='grid-image' src={require('assets/images/designProjects/LoganAir/neck_wrap_stripes.jpg')} alt='neck wrap branding'/>
                    <img className='grid-image' src={require('assets/images/designProjects/LoganAir/skirt_dashes.jpg')} alt='skirt branding'/>
                    <img className='grid-image' src={require('assets/images/designProjects/LoganAir/skirt_stripes.jpg')} alt='skirt branding'/>
                    <img className='grid-image' src={require('assets/images/designProjects/LoganAir/pillow_dashes.jpg')} alt='pillow branding'/>
                    <img className='grid-image' src={require('assets/images/designProjects/LoganAir/pillow_stripes.jpg')} alt='pillow branding'/>
                    <img className='grid-image' src={require('assets/images/designProjects/LoganAir/tie_dashes.jpg')} alt='tie branding'/>
                    <img className='grid-image' src={require('assets/images/designProjects/LoganAir/tie_stripes.jpg')} alt='tie branding'/>
                </div>
            </div>
        </div>
     );
}
 
export default LoganAirPage;