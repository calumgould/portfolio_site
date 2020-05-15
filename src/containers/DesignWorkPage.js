import React from 'react';

import 'styles/WorkGrid.css';
import designProjects from 'components/subComponents/designProjects';
import ProjectsGrid from 'components/DesignProjectsGridComponent';

const DesignWork = ({history}) => {
    return ( 
        <div>
            <h1 className='project-header'>Work</h1>
            <ProjectsGrid designProjects={designProjects} history={history}/>
        </div>
     );
}
 
export default DesignWork;