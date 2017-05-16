import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link, Switch, Route } from 'react-router-dom';
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup';
import GlobeIcon from 'material-ui/svg-icons/action/language';

import { actions } from 'store';
import ResponsiveToolbarButton from './DashboardAppBar/ResponsiveToolbarButton';
import AccountEditIcon from './svg-icons/AccountEditIcon';

const NavigationToolbarGroup = ({ dispatch }) => (
  <ToolbarGroup>
    <Link to="/">
      <ResponsiveToolbarButton
        label="Visit Blog"
        icon={<GlobeIcon />}
        phoneVisible
      />
    </Link>
    <Switch>
      <Route exact path="/dashboard/profile">
        <ResponsiveToolbarButton
          label="Edit Profile"
          icon={<AccountEditIcon />}
          onTouchTap={() => dispatch(actions.showProfileEditDialog())}
        />
      </Route>
      <Route />
    </Switch>
  </ToolbarGroup>
);

// Wrap with withRouter so connect's pure component knows to rerender on route
// changes.
export default withRouter(connect()(NavigationToolbarGroup));
