import React from 'react';

import spendDemo from 'assets/images/programmingProjects/Spend/spend_demo.mov'


const SpendPage = () => {
    return ( 
        <div>
            <h1>Spend</h1>
            <p>
                A spending tracker app
                <br />
                <b>Sinatra | Ruby, PostgreSQL</b>
            </p>
            <br />
            <p>
                <a href='https://spend-dot.herokuapp.com' target='_blank' rel='noopener noreferrer'>Spend is live on heroku!</a>
            </p>
            <p>
                <b><a href='https://github.com/calumgould/spending_tracker' target='_blank' rel='noopener noreferrer'>GitHub</a></b>
            </p>
            <video className='video-demo' loop autoPlay>
                <source src={spendDemo} type='video/mp4' />
            </video>
            <p>
                Spend is a web-app, allowing users to track their spending to have better control over their finances. 
                <br /><br />
                <b>Features include:</b>
                <br />
                <ul>
                    <li>Dynamic budget warnings and insights into the users' spending patterns</li>
                    <li>Add and manage tracks (purchases), merchants and categories</li>
                    <li>Edit budget to adapt to new financial constraints</li>
                </ul>
            </p>
        </div>
     );
}
 
export default SpendPage;