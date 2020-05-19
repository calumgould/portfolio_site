import React from 'react';

import imgSpendDemo from 'assets/images/programming_projects/img_spend/imgSpend_demo.mp4'

const ImgSpend = () => {
    return ( 
        <div>
            <h1 className='project-header'>imgSpend.</h1>
            <p className='app-description'>
                A web-app gallery using the Unsplash API
                <br /><br />
                <b>Vue.js | JavaScript, WebAPIs</b>
                <br /><br />
                <b><a href='https://github.com/calumgould/image_library_vue_api' target='_blank' rel='noopener noreferrer'>GitHub</a></b>
            </p>
            <video className='video-demo' preload='metadata' loop autoPlay controls>
                <source src={imgSpendDemo} type='video/mp4' />
                Your browser does not support this video.
            </video>
            <p className='app-description'>
                imgSpend. is a web-app that fetches and displays random images from the Unsplash image API. 
                <br /><br />
                <b>Features:</b>
                <br /><br />
            </p>
                <ul className='features-list'>
                    <li>- Fetching of 50 random images, displayed in a responsive grid</li>
                    <br />
                    <li>- Load more images on the page (10 at a time)</li>
                    <br />
                    <li>- Load an entirely new set of images</li>
                    <br />
                    <li>- Clickable images with link to the Unsplash page & author details</li>
                    <br />
                </ul>
        </div>
     );
}
 
export default ImgSpend;