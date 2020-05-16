import React from 'react';

import habbitDemo from 'assets/images/programmingProjects/Habbit/habbit_demo.mov'
import 'styles/Projects.css'

const Habbit = () => {
    return (   
        <div>
            <h1>Habbit</h1>
            <p>
                A mobile app, aimed to increase physical activity and build healthy habits.
                <br />
                <b>React Native | JavaScript, SQLite</b>
            </p>
            <p>
                <b><a href='https://github.com/calumgould/habbit_react_native_project' target='_blank' rel='noopener noreferrer'>GitHub</a></b>
            </p>
            <video className='video-demo' loop autoPlay>
                <source src={habbitDemo} type='video/mp4' />
            </video>
            <p>
                Habbit is a mobile app, inspried by Tamagotchi. 
                <br /><br />
                <b>Features include:</b>
                <br />
                <ul>
                    <li>User can name their pet</li>
                    <li>Pet can grow based on user activity (step count)</li>
                    <li>Progress bar that dynamically fills as more steps are added, and resets each growth stage</li>
                    <li>User can interact with pet by tapping on it (animation & sound)</li>
                </ul>
            </p>
        </div>
     );
}
 
export default Habbit;