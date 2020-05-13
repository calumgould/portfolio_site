import React from 'react';
import Project from './ProjectComponent';

const ProjectsGrid = (props) => {

    const projectNodes = props.designProjects.map(project => {
        return (
            <Project
                key={project.id}
                title={project.title}
                year={project.year}
                src={project.src}
                alt={project.alt}
                path={project.path}
                history={props.history}>
            </Project>
        )
    })

    return ( 
        <div className='project-grid'>
            {projectNodes}
        </div>
     );
}
 
export default ProjectsGrid;