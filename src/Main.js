import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './containers/Home';
import Work from './containers/Work';
import About from './containers/About';

const Main = () => {
    return ( 
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path ='/' component={Home} />
                    <Route path ='/work' component={Work} />
                    <Route path ='/about' component={About} />
                </Switch>
            </div>
        </Router>
     );
}
 
export default Main;
 