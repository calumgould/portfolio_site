import React from 'react';
import Project from './Project';

const ProjectsGrid = ({designProjects}) => {

    const projectNodes = designProjects.map(project => {
        return (
            <Project
                key={project.id}
                title={project.title}
                year={project.year}
                src={project.src}
                alt={project.alt}>
            </Project>
        )
    })

    return ( 
        <div>
            {projectNodes}
        </div>
     );
}
 
export default ProjectsGrid;