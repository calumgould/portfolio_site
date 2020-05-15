import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import NavBar from 'components/NavBarComponent';
import Home from 'containers/HomePage';
import Work from 'containers/WorkPage';
import DesignWork from 'containers/DesignWorkPage';
import About from 'containers/AboutPage';
import Error from 'components/ErrorComponent';
import ScrollToTop from 'components/ScrollToTop';

import DesignRoutesComponent from 'components/DesignRoutesComponent'
import ProgrammingWorkPage from 'containers/ProgrammingWorkPage';

const history = createBrowserHistory();

const Main = () => {

    const getDarkModeState = (darkModeState) => {
        setDarkMode(darkModeState)
    }

    const [darkMode, setDarkMode] = useState(true)

    return ( 
        <Router history={history}>
            <div>
                <ScrollToTop />
                <NavBar getToggleState={(darkModeState) => getDarkModeState(darkModeState)}/>
                <Switch>
                    <Route exact path ='/' render={(props) => <Home {...props} darkMode={darkMode} />} />
                    <Route exact path ='/work' component={Work} />
                    <Route exact path ='/work/design' component={DesignWork} />
                    <Route exact path ='/work/programming' component={ProgrammingWorkPage} />
                    <Route path ='/about' component={About} />
                    <DesignRoutesComponent />
                    <Route component={Error} />
                </Switch>
            </div>
        </Router>
     );
}
 
export default Main;
 