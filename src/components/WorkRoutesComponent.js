import React from 'react';
import {BrowserRouter as Switch, Route} from 'react-router-dom';

import KateBushSymposiumPage from 'containers/designProjects/KateBushSymposiumPage';
import ChoJuicePage from 'containers/designProjects/ChoJuicePage';
import HeinzPage from 'containers/designProjects/HeinzPage';
import GarvaldArtistsPage from 'containers/designProjects/GarvaldArtistsPage';
import LoganAirPage from 'containers/designProjects/LoganAirPage';
import PuppetAnimationScotlandPage from 'containers/designProjects/PuppetAnimationScotlandPage';
import TheVeryHungryCaterpillarPage from 'containers/designProjects/TheVeryHungryCaterpillarPage';
import PersonalTrainerBrandingPage from 'containers/designProjects/PersonalTrainerBrandingPage';


const WorkRoutes = () => {
    return ( 
        <Switch>
            <Route path ='/work/kate-bush-symposium' component={KateBushSymposiumPage}></Route>
            <Route path ='/work/cho-juice' component={ChoJuicePage}></Route>
            <Route path ='/work/heinz' component={HeinzPage}></Route>
            <Route path ='/work/garvald-artists' component={GarvaldArtistsPage}></Route>
            <Route path ='/work/logan-air' component={LoganAirPage}></Route>
            <Route path ='/work/puppet-animation-scotland' component={PuppetAnimationScotlandPage}></Route>
            <Route path ='/work/the-very-hungry-caterpillar' component={TheVeryHungryCaterpillarPage}></Route>
            <Route path ='/work/personal-trainer-branding' component={PersonalTrainerBrandingPage}></Route>
        </Switch>
        
     );
}
 
export default WorkRoutes;