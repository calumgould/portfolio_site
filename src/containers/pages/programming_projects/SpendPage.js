import React from 'react';

import spendDemo from 'assets/images/programming_projects/spend/spend_demo.mp4'


const SpendPage = () => {
    return ( 
        <div>
            <h1 className='project-header'>Spend.</h1>
            <p className='app-description'>
                A spending tracker app
                <br /><br />
                <b>Sinatra | Ruby, PostgreSQL</b>
                <br /><br />
                <b><a href='https://spend-dot.herokuapp.com' target='_blank' rel='noopener noreferrer'>App</a></b>
                <br /><br />
                <b><a href='https://github.com/calumgould/spending_tracker' target='_blank' rel='noopener noreferrer'>GitHub</a></b>
            </p>
            <video className='video-demo' preload='metadata' loop autoPlay controls>
                <source src={spendDemo} type='video/mp4' />
                Your browser does not support this video.
            </video>
            <p className='app-description'>
                Spend. is a web-app, allowing users to track their spending to have better control over their finances. 
                <br /><br />
                <b>Features:</b>
                <br /><br />
            </p>
                <ul className='features-list'>
                    <li><span>-</span> Dynamic budget warnings and insights into the user's spending patterns</li>
                    <br />
                    <li><span>-</span> Add and manage tracks (purchases), merchants and categories</li>
                    <br />
                    <li><span>-</span> Edit budget to adapt to new financial constraints</li>
                    <br />
                </ul>
        </div>
     );
}
 
export default SpendPage;