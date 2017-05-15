import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { IndexPage, NotFoundPage } from '../pages';
import Dashboard from './Dashboard';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={IndexPage} />
    <PrivateRoute exact path="/dashboard" component={Dashboard} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Routes;
