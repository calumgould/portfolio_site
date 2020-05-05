import React from 'react';

import 'styles/Project.css'

const Project = (props) => {
    return ( 
        <div>
            <img
            className="image" 
            src={props.src} 
            alt={props.alt}
            onClick={() => props.history.push(props.path)}
            />
            <h3>{props.title}</h3>
            <h5>{props.year}</h5>
        </div>
     );
}
 
export default Project;