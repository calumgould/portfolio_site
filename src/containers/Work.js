import React, { Component } from 'react';

import 'styles/Work.css';
import designProjects from 'components/subComponents/designProjects';

import ProjectsGrid from 'components/ProjectsGrid';

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
                <h1>Work</h1>
                <ProjectsGrid designProjects={this.state.designProjects} />
            </div>

         );
    }
}
 
export default Work;