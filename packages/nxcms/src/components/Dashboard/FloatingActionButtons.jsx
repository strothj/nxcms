import Radium from 'radium';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import { breakpoints } from 'styles';
import AccountEditIcon from './svg-icons/AccountEditIcon';

const styles = {
  display: 'none',
  [`@media ${breakpoints.phoneOnly}`]: {
    display: 'block',
    position: 'fixed',
    right: 24,
    bottom: 24,
  },
};

const FloatingActionButtons = () => (
  <div style={styles}>
    <Switch>
      <Route path="/dashboard/profile">
        <FloatingActionButton>
          <AccountEditIcon />
        </FloatingActionButton>
      </Route>
      <Route />
    </Switch>
  </div>
);

export default Radium(FloatingActionButtons);
