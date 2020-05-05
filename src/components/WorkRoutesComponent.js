import React from 'react';
import {BrowserRouter as Switch, Route} from 'react-router-dom';

import KateBushSymposium from 'containers/designProjects/KateBushSymposiumPage'


const WorkRoutes = () => {
    return ( 
        <Switch>
            <Route path ='/work/kate-bush-symposium' component={KateBushSymposium}></Route>
        </Switch>
        
     );
}
 
export default WorkRoutes;