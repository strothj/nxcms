import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IconMenu, MenuItem } from 'material-ui';
import { actions } from 'store';
import AppBarIconButton from './AppBarIconButton';
import LogoutIcon from './LogoutIcon';

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
