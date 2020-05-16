import React from 'react';

import 'styles/About.css';

const About = () => {
    return ( 
        <div className='about-page'>
            <h1 className='project-header'>
                About
            </h1>
            <div className='about-container'>
                <div className='about-image'>
                    <img src={require('assets/images/calum_image.jpg')}alt='calum gould' />
                </div>
                <div className='about-text'>  
                    <p>
                        Hi, I'm Calum! I'm a software developer with a background in design.
                    </p>
                    <br />
                    <p>
                        I have recently completed the <i>Professional Software Development Course</i> at CodeClan. Prior to this I studied Graphic Design at the University of Edinburgh.
                    </p>
                    <br />
                    <p>
                        My main interests lie in Front End Development and would be well suited in a role that allowed me to combine my programming and design skills.
                    </p>
                    <br />
                    <p>
                        For a full list of skills, please check out my
                            <a href='https://www.linkedin.com/in/calum-gould/' target='_blank' rel='noopener noreferrer'> 
                                <b> LinkedIn </b> 
                            </a>
                        profile
                    </p>
                    <br />
                    <p>
                        If you want to get in touch, please email me at: <b><a href='mailto:calumgould26@gmail.com'>calumgould26@gmail.com</a></b>
                    </p>
                    <br />
                    <h3>Education</h3>
                    <br />
                    <ul>
                        <li>
                            <b>CodeClan</b><br />
                            Professional Software Development Course
                        </li>
                        <br />
                        <li>
                            <b>University of Edinburgh</b><br />
                            BA Hons Graphic Design
                        </li>
                        <br />
                        <li>
                            <b>Bolton School Sixth Form</b><br />
                            A-Level Graphic Design, Maths with Mechanics, Electronics
                        </li>
                    </ul>
                </div>
                <div className='about-skills'>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>React Native</li>
                        <li>Vue.js</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Ruby + Sinatra</li>
                        <li>Java + Spring</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>PostgreSQL</li>
                        <li>NoSQL</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Agile</li>
                        <li>TDD</li>
                        <li>UX Design</li>
                        <li>Restful APIs</li>

                    </ul>
                </div>
            </div>
            
        </div>
     );
}

export default About;