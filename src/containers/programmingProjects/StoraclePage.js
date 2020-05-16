import React from 'react';

import storacleDemo from 'assets/images/programmingProjects/Storacle/storacle_demo.mov'


const Storacle = () => {
    return ( 
        <div>
            <h1>Storacle</h1>
            <p>
                A shares portfolio app
                <br />
                <b>Vue.js | JavaScript, Node.js, MongoDB, StockCharts</b>
            </p>
            <p>
                <b><a href='https://github.com/calumgould/shares_portfolio' target='_blank' rel='noopener noreferrer'>GitHub</a></b>
            </p>
            <video className='video-demo' loop autoPlay>
                <source src={storacleDemo} type='video/mp4' />
            </video>
            <p>
                Storacle is a web-app which allows users to track and view their investments in any company.
                <br /><br />
                <b>Features include:</b>
                <br />
                <ul>
                    <li>Ability to search and fetch real-time data from the Alpha Vantage Stock API</li>
                    <li>User can add/edit stocks and receive an accurate total shares value based on real closing values for the chosen company</li>
                    <li>Dynamic rendering of a StockChart for each added stock, and a summary multi-plot StockChart of all stocks</li>
                    <li>User can see the total value of all their investments</li>
                </ul>
            </p>
        </div>
     );
}
 
export default Storacle;