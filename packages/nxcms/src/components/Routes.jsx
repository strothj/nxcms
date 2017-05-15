import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { IndexPage, NotFoundPage, dashboard } from '../pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={IndexPage} />
    <PrivateRoute exact path="/dashboard" component={dashboard.IndexPage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Routes;
