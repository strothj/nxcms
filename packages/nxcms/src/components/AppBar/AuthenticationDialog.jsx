import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { Dialog, FlatButton, TextField } from 'material-ui';
import { colors, getMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import { actions } from 'store';

const dialogTheme = getMuiTheme({
  palette: {
    primary1Color: '#fff',
    canvasColor: colors.blue500,
    textColor: '#fff',
  },
});

const styles = {
  dialog: {
    contentStyle: { maxWidth: 400 },
  },
  actionSection: {
    textAlign: 'right',
    padding: 8,
    margin: '24px -24px -24px -24px',
  },
};

class AuthenticationDialog extends Component {
  state = { loginEnabled: false, username: '', password: '' };

  componentWillReceiveProps = nextProps => {
    if (
      nextProps.showLoginDialog &&
      nextProps.showLoginDialog !== this.props.showLoginDialog
    )
      setTimeout(() => {
        this.username.focus();
      }, 200);
  };

  updateLoginButtonState = () => {
    this.setState(
      prevState =>
        prevState.username && prevState.password
          ? { loginEnabled: true }
          : { loginEnabled: false }
    );
  };

  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
    this.updateLoginButtonState();
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
    this.updateLoginButtonState();
  };

  close = () => {
    this.setState({ username: '', password: '' });
    this.props.dispatch(actions.hideLoginDialog());
  };

  cancel = () => {
    this.close();
  };

  login = e => {
    e.preventDefault();
    this.props
      .dispatch(actions.login(this.state.username, this.state.password))
      .then(this.close)
      .catch(() => {});
  };

  render() {
    const actionButtons = [
      <FlatButton label="Cancel" primary onTouchTap={this.cancel} key="1" />,
      <FlatButton
        label="Login"
        primary
        disabled={!this.state.loginEnabled}
        type="submit"
        key="2"
      />,
    ];

    const { from } = this.props.location.state || {
      from: { pathname: '/dashboard' },
    };

    if (this.props.profile) return <Redirect to={from} />;

    return (
      <MuiThemeProvider muiTheme={dialogTheme}>
        <Dialog
          title="Editor Login"
          model={false}
          open={this.props.showLoginDialog}
          onRequestClose={this.cancel}
          {...styles.dialog}
        >
          <form onSubmit={this.login}>
            <p>{this.props.loginError}</p>
            <TextField
              floatingLabelText="Username"
              fullWidth
              onChange={this.handleUsernameChange}
              value={this.state.username}
              ref={c => {
                this.username = c;
              }}
            />
            <br />
            <TextField
              floatingLabelText="Password"
              fullWidth
              type="password"
              onChange={this.handlePasswordChange}
              value={this.state.password}
            />
            <div style={styles.actionSection}>
              {actionButtons}
            </div>
          </form>
        </Dialog>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({ profile, loginError, showLoginDialog }) => ({
  profile,
  loginError,
  showLoginDialog,
});

export default connect(mapStateToProps)(withRouter(AuthenticationDialog));
