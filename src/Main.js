import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import NavBar from 'components/NavBarComponent';
import Home from 'containers/HomePage';
import Work from 'containers/WorkPage';
import DesignWork from 'containers/DesignWorkPage';
import About from 'containers/AboutPage';
import Error from 'components/ErrorComponent';

import DesignRoutesComponent from 'components/DesignRoutesComponent'

const history = createBrowserHistory();

const Main = () => {
    return ( 
        <Router history={history}>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path ='/' component={Home} />
                    <Route exact path ='/work' component={Work} />
                    <Route exact path ='/work/design' component={DesignWork} />
                    <Route path ='/about' component={About} />
                    <DesignRoutesComponent />
                    <Route component={Error} />
                </Switch>
            </div>
        </Router>
     );
}
 
export default Main;
 