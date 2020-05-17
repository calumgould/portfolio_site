import React from 'react';
import {BrowserRouter as Switch, Route} from 'react-router-dom';

import KateBushSymposiumPage from 'components/pages/design_projects/KateBushSymposiumPage';
import ChoJuicePage from 'components/pages/design_projects/ChoJuicePage';
import HeinzPage from 'components/pages/design_projects/HeinzPage';
import GarvaldArtistsPage from 'components/pages/design_projects/GarvaldArtistsPage';
import LoganAirPage from 'components/pages/design_projects/LoganAirPage';
import PuppetAnimationScotlandPage from 'components/pages/design_projects/PuppetAnimationScotlandPage';
import TheVeryHungryCaterpillarPage from 'components/pages/design_projects/TheVeryHungryCaterpillarPage';
import PersonalTrainerBrandingPage from 'components/pages/design_projects/PersonalTrainerBrandingPage';

import SpendPage from 'components/pages/programming_projects/SpendPage';
import ImgSpendPage from 'components/pages/programming_projects/ImgSpendPage';
import StoraclePage from 'components/pages/programming_projects/StoraclePage';
import HabbitPage from 'components/pages/programming_projects/HabbitPage';


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