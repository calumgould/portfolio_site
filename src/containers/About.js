import React from 'react';

import 'styles/About.css';

const About = () => {
    return ( 
        <div>
            <h1>
                About
            </h1>
            <p>
                Hi, I'm Calum! I'm a software developer with a background in design.
            </p>
            <p>
                I have recently completed the <i>Professional Software Development Course</i> at CodeClan. Prior to this I studied Graphic Design at the University of Edinburgh.
            </p>
            <p>
                My main interests lie in Front End Development and would be well suited in a role that allowed me to combine my programming and design skills.
            </p>
            <p>
                Languages I have worked with include:
            </p>
            <ul>
                <li>JavaScript</li>
                <li>HTMl</li>
                <li>CSS</li>
                <li>Java</li>
                <li>Ruby</li>
                <li>SQL</li>
            </ul>
            <p>
                Also having experience with the following frameworks:
            </p>
            <ul>
                <li>React</li>
                <li>React Native</li>
                <li>Vue</li>
                <li>Sinatra</li>
            </ul>
            <p>
                For a full list of skills, please visit out my
                    <a href='https://www.linkedin.com/in/calum-gould/'> 
                        <b> LinkedIn </b> 
                    </a>
                profile
            </p>
            <p>
                If you want to get in touch, please email me at: <b>calumgould26@gmail.com</b>
            </p>

            <h3>Education</h3>
            <ul>
                <li>
                    <b>CodeClan</b><br />
                    Professional Software Development Course
                </li>
                <li>
                    <b>University of Edinburgh</b><br />
                    BA Hons Graphic Design
                </li>
                <li>
                    <b>Bolton School Sixth Form</b><br />
                    A-Level Graphic Design, Maths with Mechanics, Electronics
                </li>
            </ul>


        </div>
     );
}
 
export default About;