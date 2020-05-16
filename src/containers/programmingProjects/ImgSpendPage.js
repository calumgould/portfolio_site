import React from 'react';

import imgSpendDemo from 'assets/images/programmingProjects/ImgSpend/imgSpend_demo.mov'

const ImgSpend = () => {
    return ( 
        <div>
            <h1>ImgSpend</h1>
            <p>
                A web-app gallery using the Unsplash API
                <br />
                <b>Vue.js | JavaScript, WebAPIs</b>
            </p>
            <p>
                <b><a href='https://github.com/calumgould/image_library_vue_api' target='_blank' rel='noopener noreferrer'>GitHub</a></b>
            </p>
            <video className='video-demo' loop autoPlay>
                <source src={imgSpendDemo} type='video/mp4' />
            </video>
            <p>
                ImgSpend is a web-app that fetches and displays random images from the Unsplash image API. 
                <br /><br />
                <b>Features include:</b>
                <br />
                <ul>
                    <li>Fetching of 50 random images, displayed in a responsive grid</li>
                    <li>Load more images on the page (10 at a time)</li>
                    <li>Load an entirely new set of images</li>
                    <li>Clickable images with link to the Unsplash page & author details</li>
                </ul>
            </p>
        </div>
     );
}
 
export default ImgSpend;