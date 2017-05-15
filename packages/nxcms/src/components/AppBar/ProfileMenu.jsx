import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { IconMenu, MenuItem } from 'material-ui';
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
import { actions } from 'store';
import AppBarIconButton from './AppBarIconButton';
import LogoutIcon from './LogoutIcon';

const Link = props => (
  <RouterLink {...props} style={{ textDecoration: 'none', color: 'inherit' }} />
);

class ProfileMenu extends Component {
  showLoginDialog = () => {
    this.props.dispatch(actions.showLoginDialog());
  };

  logout = () => {
    this.props.dispatch(actions.logout());
  };

  render() {
    if (!this.props.profile)
      return (
        <AppBarIconButton icon="login" onTouchTap={this.showLoginDialog} />
      );

    return (
      <IconMenu
        iconButtonElement={<AppBarIconButton icon="moreVert" />}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <MenuItem
          primaryText={<Link to="/dashboard">Dashboard</Link>}
          leftIcon={<DashboardIcon />}
        />
        <MenuItem
          primaryText="Log out"
          leftIcon={<LogoutIcon />}
          onTouchTap={this.logout}
        />
      </IconMenu>
    );
  }
}

const mapStateToProps = ({ profile }) => ({ profile });

export default connect(mapStateToProps)(ProfileMenu);
