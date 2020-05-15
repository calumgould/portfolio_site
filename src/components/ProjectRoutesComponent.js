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

import SpendPage from 'containers/programmingProjects/SpendPage';
import ImgSpendPage from 'containers/programmingProjects/ImgSpendPage';
import StoraclePage from 'containers/programmingProjects/StoraclePage';
import HabbitPage from 'containers/programmingProjects/HabbitPage';


const DesignRoutes = () => {
    return ( 
        <Switch>
            <Route path ='/work/design/kate-bush-symposium' component={KateBushSymposiumPage}></Route>
            <Route path ='/work/design/cho-juice' component={ChoJuicePage}></Route>
            <Route path ='/work/design/heinz' component={HeinzPage}></Route>
            <Route path ='/work/design/garvald-artists' component={GarvaldArtistsPage}></Route>
            <Route path ='/work/design/logan-air' component={LoganAirPage}></Route>
            <Route path ='/work/design/puppet-animation-scotland' component={PuppetAnimationScotlandPage}></Route>
            <Route path ='/work/design/the-very-hungry-caterpillar' component={TheVeryHungryCaterpillarPage}></Route>
            <Route path ='/work/design/personal-trainer-branding' component={PersonalTrainerBrandingPage}></Route>
            <Route path ='/work/programming/spend' component={SpendPage}></Route>
            <Route path ='/work/programming/imgspend' component={ImgSpendPage}></Route>
            <Route path ='/work/programming/storacle' component={StoraclePage}></Route>
            <Route path ='/work/programming/habbit' component={HabbitPage}></Route>
        </Switch>
        
     );
}
 
export default DesignRoutes;