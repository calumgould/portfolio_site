import React from 'react';

import 'styles/ProjectsGrid.css';
import designProjects from 'components/subComponents/designProjects';
import ProjectsGrid from 'components/DesignProjectsGridComponent';

const DesignWork = ({history}) => {
    return ( 
        <div>
            <h1 className='project-header'>Design Work</h1>
            <ProjectsGrid designProjects={designProjects} history={history}/>
        </div>
     );
}
 
export default DesignWork;