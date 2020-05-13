import React, { Component } from 'react';

import 'styles/DesignWork.css';
import designProjects from 'components/subComponents/designProjectsComponent';

import ProjectsGrid from 'components/DesignProjectsGridComponent';

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            designProjects: designProjects
        } 
    }
    render() { 
        return (
            <div>
                <h1 className='project-header'>Work</h1>
                <ProjectsGrid designProjects={this.state.designProjects} history={this.props.history}/>
            </div>

         );
    }
}
 
export default Work;