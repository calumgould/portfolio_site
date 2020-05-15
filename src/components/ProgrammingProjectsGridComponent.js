import React from 'react';
import Project from './ProgrammingProjectComponent';

const ProjectsGrid = (props) => {

    const projectNodes = props.programmingProjects.map(project => {
        return (
            <Project
                key={project.id}
                title={project.title}
                info={project.info}
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
