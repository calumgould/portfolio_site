import React from 'react';

import 'styles/WorkGrid.css'
import programmingProjects from 'components/subComponents/programmingProjects'
import ProjectsGrid from 'components/ProgrammingProjectsGridComponent'

const ProgrammingWorkPage = ({history}) => {
    return ( 
        <div>
            <h1 className='project-header'>Work</h1>
            <ProjectsGrid programmingProjects={programmingProjects} history={history}/>
        </div>
     );
}
 
export default ProgrammingWorkPage;