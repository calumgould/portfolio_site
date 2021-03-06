import React from 'react';

import storacleDemo from 'assets/images/programming_projects/storacle/storacle_demo.mp4'


const Storacle = () => {
    return ( 
        <div>
            <h1 className='project-header'>Storacle</h1>
            <p className='app-description'>
                A shares portfolio app
                <br /><br />
                <b>Vue.js | JavaScript, Node.js, MongoDB, StockCharts</b>
                <br /><br />
                <b><a href='https://github.com/calumgould/shares_portfolio' target='_blank' rel='noopener noreferrer'>GitHub</a></b>
            </p>
            <video className='video-demo' preload='metadata' loop autoPlay controls>
                <source src={storacleDemo} type='video/mp4' />
                Your browser does not support this video.
            </video>
            <p className='app-description'>
                Storacle is a web-app which allows users to track and view their investments in any company.
                <br /><br />
                <b>Features:</b>
                <br /><br />
            </p>
                <ul className='features-list'>
                    <li><span>-</span> Ability to search and fetch real-time data from the Alpha Vantage Stock API</li>
                    <br />
                    <li><span>-</span> User can add/edit stocks and receive an accurate total shares value based on real closing values for the chosen company</li>
                    <br />
                    <li><span>-</span> Dynamic rendering of a StockChart for each added stock, and a summary multi<span>-</span>plot StockChart of all stocks</li>
                    <br />
                    <li><span>-</span> User can see the total value of all their investments</li>
                    <br />
                </ul>
        </div>
     );
}
 
export default Storacle;