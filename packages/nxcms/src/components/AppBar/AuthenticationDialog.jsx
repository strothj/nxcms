import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog, FlatButton } from 'material-ui';
import { colors, getMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import { actions } from 'store';

const dialogTheme = getMuiTheme({
  palette: {
    primary1Color: '#fff',
    canvasColor: colors.blue500,
    textColor: '#fff',
  },
});

class AuthenticationDialog extends Component {
  state = { loginEnabled: false };

  cancel = () => {
    this.props.dispatch(actions.hideLoginDialog());
  };

  login = () => {
    this.props.dispatch(actions.hideLoginDialog());
  };

  render() {
    const actionButtons = [
      <FlatButton label="Cancel" primary onTouchTap={this.cancel} />,
      <FlatButton
        label="Login"
        primary
        disabled={!this.state.loginEnabled}
        onTouchTap={this.login}
      />,
    ];

    return (
      <MuiThemeProvider muiTheme={dialogTheme}>
        <Dialog
          title="Editor Login"
          actions={actionButtons}
          model={false}
          open={this.props.showLoginDialog}
          onRequestClose={this.cancel}
        >
          <p>Login screen</p>
        </Dialog>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({ showLoginDialog }) => ({ showLoginDialog });

export default connect(mapStateToProps)(AuthenticationDialog);
