import React from 'react';

import habbitDemo from './node_modules/assets/images/programming_projects/habbit/habbit_demo.mp4'

const Habbit = () => {
    return (   
        <div>
            <h1 className='project-header'>Habbit</h1>
            <p className='app-description'>
                A mobile app, aimed to increase physical activity and build healthy habits.
                <br /><br />
                <b>React Native | JavaScript, SQLite</b>
                <br /><br />
                <b><a href='https://github.com/calumgould/habbit_react_native_project' target='_blank' rel='noopener noreferrer'>GitHub</a></b>
            </p>
            <video className='video-demo' loop autoPlay>
                <source src={habbitDemo} type='video/mp4' />
            </video>
            <p className='app-description'>
                Habbit is a mobile app, inspried by Tamagotchi. 
                <br /><br />
                <b>Features:</b>
                <br /><br />
            </p>
                <ul className='features-list'>
                    <li>- User can name their pet</li>
                    <br />
                    <li>- Pet can grow based on user activity (step count)</li>
                    <br />
                    <li>- Progress bar that dynamically fills as more steps are added, and resets each growth stage</li>
                    <br />
                    <li>- User can interact with pet by tapping on it (animation & sound)</li>
                    <br />
                </ul>
        </div>
     );
}
 
export default Habbit;