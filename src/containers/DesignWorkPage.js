import React from 'react';

import 'styles/DesignWork.css';
import designProjects from 'components/subComponents/designProjectsComponent';

import ProjectsGrid from 'components/DesignProjectsGridComponent';

const Work = ({history}) => {
    return ( 
        <div>
            <h1 className='project-header'>Work</h1>
            <ProjectsGrid designProjects={designProjects} history={history}/>
        </div>
     );
}
 
export default Work;