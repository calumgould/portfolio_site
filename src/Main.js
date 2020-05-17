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
import Footer from 'components/Footer';

import ProjectRoutesComponent from 'components/ProjectRoutesComponent';
import ProgrammingWorkPage from 'containers/ProgrammingWorkPage';

import 'styles/index.css'

const history = createBrowserHistory();

const Main = () => {

    const getDarkModeState = (darkModeState) => {
        setDarkMode(darkModeState)
    }

    const [darkMode, setDarkMode] = useState(true)

    return ( 
        <div>
            <div>
                <Router history={history}>
                    <ScrollToTop />
                        <NavBar getToggleState={(darkModeState) => getDarkModeState(darkModeState)}/>
                        <Switch>
                            <Route exact path ='/' render={(props) => <Home {...props} darkMode={darkMode} />} />
                            <Route exact path ='/work' component={Work} />
                            <Route exact path ='/about' component={About} />
                            <Route exact path ='/work/design' component={DesignWork} />
                            <Route exact path ='/work/programming' component={ProgrammingWorkPage} />
                            <ProjectRoutesComponent />
                            <Route component={Error} />
                        </Switch>
                        <Switch>
                            <Route exact path ='/' />
                            <Route exact path ='/work' />
                            <Route path ='/' render={(props) => <Footer {...props} darkMode={darkMode} />} />
                        </Switch>
                </Router>
            </div>
            
        </div>
     );
}
 
export default Main;
 