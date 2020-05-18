import React from 'react';

import portfolioDemo from 'assets/images/programming_projects/portfolio/portfolio_demo.mov';

const Portfolio = () => {
    return ( 
        <div>
            <h1 className='project-header'>Portfolio</h1>
            <p className='app-description'>
                A portfolio website
                <br /><br />
                <b>React | JavaScript</b>
                <br /><br />
                <b><a href='https://github.com/calumgould/portfolio_site' target='_blank' rel='noopener noreferrer'>GitHub</a></b>
            </p>
            <video className='video-demo' loop autoPlay>
                <source src={portfolioDemo} type='video/mp4' />
            </video>
            <p className='app-description'>
                This is my portfolio website that I made to collate some of my work over the years into one place.
                <br /><br />
                <b>Features:</b>
                <br /><br />
            </p>
                <ul className='features-list'>
                    <li>Light / Dark mode toggle</li>
                    <br />
                    <li>React Router navigation</li>
                    <br />
                    <li>Dynamically populated slideshow</li>
                    <br />
                </ul>
        </div>
     );
}
 
export default Portfolio;