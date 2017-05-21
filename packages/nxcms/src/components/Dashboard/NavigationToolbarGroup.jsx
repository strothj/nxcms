import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link, Switch, Route } from 'react-router-dom';
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup';
import GlobeIcon from 'material-ui/svg-icons/action/language';
import InsertDriveFileIcon
  from 'material-ui/svg-icons/editor/insert-drive-file';
import ModeEditIcon from 'material-ui/svg-icons/editor/mode-edit';

import { actions } from 'store';
import ResponsiveToolbarButton from './AppBar/ResponsiveToolbarButton';
import DeletePostToolbarButton from './AppBar/DeletePostToolbarButton';
import AccountEditIcon from './svg-icons/AccountEditIcon';

const NavigationToolbarGroup = ({ dispatch, selectedArticle }) => (
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
      <Route exact path="/dashboard/posts">
        <div style={{ display: 'flex' }}>
          <Link to="/dashboard/posts/new">
            <ResponsiveToolbarButton
              label="New Post"
              icon={<InsertDriveFileIcon />}
              phoneVisible
            />
          </Link>
          {selectedArticle &&
            <div style={{ display: 'flex' }}>
              <Link to={`/dashboard/posts/${selectedArticle}`}>
                <ResponsiveToolbarButton
                  label="Edit"
                  icon={<ModeEditIcon />}
                  phoneVisible
                />
              </Link>
              <DeletePostToolbarButton />
            </div>}
        </div>
      </Route>
      <Route />
    </Switch>
  </ToolbarGroup>
);

const mapStateToProps = ({ selectedArticle }) => ({ selectedArticle });

// Wrap with withRouter so connect's pure component knows to rerender on route
// changes.
export default withRouter(connect(mapStateToProps)(NavigationToolbarGroup));
