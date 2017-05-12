import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { IndexPage, LoginPage, NotFoundPage, dashboard } from '../pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={IndexPage} />
    <Route path="/login" component={LoginPage} />
    <PrivateRoute exact path="/dashboard" component={dashboard.IndexPage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Routes;
