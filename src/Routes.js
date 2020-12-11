import React from 'react';
import WorkWidgetsWrapper from './WorkWidgetsWrapper/index'
import StartWrapper from './StartWrapper/index'
import TeamPannel from './TeamPannel/index'
import { BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom'

export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route path='/' exact component={StartWrapper} />
                <Route path='/home' exact component={WorkWidgetsWrapper} />
                <Route path='/teams' exact component={TeamPannel} />
            </Switch>
        </Router>
    );
}