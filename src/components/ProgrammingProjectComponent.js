import React from 'react';


const Project = (props) => {
    return ( 
        <div className='project-item'>
            <img
            className="image" 
            src={props.src} 
            alt={props.alt}
            onClick={() => props.history.push(`/work/programming/${props.path}`)}
            />
            <h3>{props.title}</h3>
            <h4>{props.info}</h4>
            <h5>{props.year}</h5>
        </div>
     );
}
 
export default Project;