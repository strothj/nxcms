import Radium from 'radium';
import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { grey50, grey500 } from 'material-ui/styles/colors';
import { breakpoints } from 'styles';

const RadiumTextField = Radium(TextField);

const styles = {
  form: {
    [`@media ${breakpoints.phoneOnly}`]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  emailField: {
    [`@media ${breakpoints.phoneOnly}`]: {
      width: '100%',
      marginBottom: 16,
    },
    [`@media ${breakpoints.tablet}`]: { marginRight: 16 },
  },
  field: { color: grey50 },
  fieldHint: { color: grey500 },
  buttonLabel: { textTransform: 'none' },
};

@Radium class NewsletterSignupForm extends Component {
  state = {
    confirmDialogOpen: false,
    email: '',
  };

  handleOpenConfirmDialog = () => {
    this.setState({ confirmDialogOpen: true });
  };

  handleCloseConfirmDialog = () => {
    this.setState({ confirmDialogOpen: false });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: '' });
    this.handleOpenConfirmDialog();
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  render() {
    const actions = [
      <FlatButton
        label="OK"
        primary
        onTouchTap={this.handleCloseConfirmDialog}
      />,
    ];

    return (
      <form style={styles.form} onSubmit={this.handleSubmit}>
        <RadiumTextField
          value={this.state.email}
          onChange={this.handleEmailChange}
          hintText="Your email address"
          type="email"
          required
          style={styles.emailField}
          inputStyle={styles.field}
          hintStyle={styles.fieldHint}
        />
        <RaisedButton
          label="Subscribe"
          primary
          type="submit"
          labelStyle={styles.buttonLabel}
        />
        <Dialog
          actions={actions}
          open={this.state.confirmDialogOpen}
          onRequestClose={this.handleCloseConfirmDialog}
        >
          {"You've been subscribed!"}
        </Dialog>
      </form>
    );
  }
}

export default NewsletterSignupForm;
