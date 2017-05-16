import Radium from 'radium';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import { actions } from 'store';
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

const FloatingActionButtons = ({ dispatch }) => (
  <div style={styles}>
    <Switch>
      <Route path="/dashboard/profile">
        <FloatingActionButton
          onTouchTap={() => dispatch(actions.showProfileEditDialog())}
        >
          <AccountEditIcon />
        </FloatingActionButton>
      </Route>
      <Route />
    </Switch>
  </div>
);

// Need to wrap with withRouter to inform connect's pure component that it
// should issue a rerender on route changes.
export default withRouter(connect()(Radium(FloatingActionButtons)));
