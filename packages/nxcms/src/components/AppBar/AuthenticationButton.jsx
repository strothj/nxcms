import Radium from 'radium';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
import { actions } from 'store';
import AuthenticationDialog from './AuthenticationDialog';

const LoginIcon = props => (
  <SvgIcon {...props}>
    <path d="M19,3H5C3.89,3 3,3.89 3,5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z" />
  </SvgIcon>
);

const LogoutIcon = props => (
  <SvgIcon {...props}>
    <path d="M14.08,15.59L16.67,13H7V11H16.67L14.08,8.41L15.5,7L20.5,12L15.5,17L14.08,15.59M19,3A2,2 0 0,1 21,5V9.67L19,7.67V5H5V19H19V16.33L21,14.33V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19Z" />
  </SvgIcon>
);

@Radium class AuthenticationButton extends Component {
  state = { open: false };

  handleClick = () => {
    this.props.dispatch(actions.showLoginDialog());
  };

  render() {
    const Icon = this.props.session ? LoginIcon : LogoutIcon;

    return (
      <IconButton iconStyle={this.props.style} onTouchTap={this.handleClick}>
        <Icon />
        <AuthenticationDialog />
      </IconButton>
    );
  }
}

const mapStateToProps = ({ session }) => ({ session });

export default connect(mapStateToProps)(AuthenticationButton);
