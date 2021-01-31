import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './components/Welcome';
import HomePage from './components/HomePage';

// Modify the previous exercise to use routes instead of conditional rendering.

export default () => {
    return (
        <Router>
            <Switch>
            <Route path={"/"} exact component={Welcome}></Route>
            <Route path={"/HomePage"} exact component={HomePage}></Route>
            </Switch>
        </Router> 
    );
};