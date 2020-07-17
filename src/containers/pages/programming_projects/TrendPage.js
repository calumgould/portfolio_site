import React from 'react';

import trendDemo from 'assets/images/programming_projects/trend/trend_demo.mp4'

const Trend = () => {
    return ( 
        <div>
            <h1 className='project-header'>trend.</h1>
            <p className='app-description'>
                An online fashion store.
                <br /><br />
                <b>React | JavaScript, Node.js</b>
                <br /><br />
                <b><a href='https://feasty-1b5e9.web.app/' target='_blank' rel='noopener noreferrer'>App</a></b>
                <br /><br />
                <b><a href='https://github.com/calumgould/fashion_website' target='_blank' rel='noopener noreferrer'>GitHub</a></b>
            </p>
            <video className='video-demo' preload='metadata' loop autoPlay controls>
                <source src={trendDemo} type='video/mp4' />
                Your browser does not support this video.
            </video>
            <p className='app-description'>
                trend. was designed to gain experience in building a full app from scratch and allowing me to develop skills in several new technologies.
                <br /><br />
                <b>Features:</b>
                <br /><br />
            </p>
                <ul className='features-list'>
                    <li><span>-</span> React Redux</li>
                    <br />
                    <li><span>-</span> Dark mode toggle</li>
                    <br />
                    <li><span>-</span> Firebase user authentication</li>
                    <br />
                    <li><span>-</span> Firestore database for user cart, product list and categories</li>
                    <br />
                    <li><span>-</span> Firestore storage for user profile picture and product images</li>
                    <br />
                    <li><span>-</span> Example admin page to allow adding/removing of products</li>
                    <br />
                    <li><span>-</span> Stripe payment integration</li>
                    <br />
                    <li><span>-</span> Material UI Icons</li>
                    <br />
                    <li><span>-</span> Axios</li>
                    <br />
                </ul>
        </div>
     );
}
 
export default Trend;