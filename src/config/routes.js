import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from '../scenes/Login/Login';
import Timeline from '../scenes/Timeline/Timeline';

const Routes = props => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={ Login }/>
            <Route path="/timeline" component={ Timeline }/>
            <Redirect from="*" to="/timeline" />
        </Switch>
    </BrowserRouter>    
);

export default Routes;