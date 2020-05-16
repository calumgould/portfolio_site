import React from 'react';

import spendDemo from 'assets/images/programmingProjects/Spend/spend_demo.mov'


const SpendPage = () => {
    return ( 
        <div>
            <h1 className='project-header'>Spend</h1>
            <p className='app-description'>
                A spending tracker app
                <br /><br />
                <b>Sinatra | Ruby, PostgreSQL</b>
                <br /><br />
                <a href='https://spend-dot.herokuapp.com' target='_blank' rel='noopener noreferrer'>App</a>
                <br /><br />
                <b><a href='https://github.com/calumgould/spending_tracker' target='_blank' rel='noopener noreferrer'>GitHub</a></b>
            </p>
            <video className='video-demo' loop autoPlay>
                <source src={spendDemo} type='video/mp4' />
            </video>
            <p className='app-description'>
                Spend is a web-app, allowing users to track their spending to have better control over their finances. 
                <br /><br />
                <b>Features:</b>
                <br /><br />
            </p>
                <ul className='features-list'>
                    <li>- Dynamic budget warnings and insights into the users' spending patterns</li>
                    <br />
                    <li>- Add and manage tracks (purchases), merchants and categories</li>
                    <br />
                    <li>- Edit budget to adapt to new financial constraints</li>
                    <br />
                </ul>
        </div>
     );
}
 
export default SpendPage;