import React from 'react';


const Project = (props) => {
    return ( 
        <div className='project-item'>
            <img
            className="image" 
            src={props.src} 
            alt={props.alt}
            onClick={() => props.history.push(`/work/design/${props.path}`)}
            />
            <div className='project-item-text'>
                <h3>{props.title}</h3>
                <p>{props.year}</p>
            </div>
        </div>
     );
}
 
export default Project;