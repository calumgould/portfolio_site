import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import NavBar from 'components/NavBar';
import Home from 'containers/Home';
import Work from 'containers/Work';
import About from 'containers/About';
import Error from 'components/Error';

const history = createBrowserHistory();

const Main = () => {
    return ( 
        <Router history={history}>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path ='/' component={Home} />
                    <Route path ='/work' component={Work} />
                    <Route path ='/about' component={About} />
                    <Route component={Error} />
                </Switch>
            </div>
        </Router>
     );
}
 
export default Main;
 