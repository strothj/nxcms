import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { grey50, grey500 } from 'material-ui/styles/colors';

import { breakpoints } from 'styles';

const styles = {
  field: { color: grey50 },
  fieldHint: { color: grey500 },
  buttonLabel: { textTransform: 'none' },
};

class NewsletterSignupForm extends Component {
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
      <form onSubmit={this.handleSubmit}>
        <TextField
          value={this.state.email}
          onChange={this.handleEmailChange}
          hintText="Your email address"
          type="email"
          required
          className="newsletter-email"
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

        <style jsx>{`
          @media ${breakpoints.tablet} {
            form :global(.newsletter-email) {
              margin-right: 16px;
            }
          }

          @media ${breakpoints.phoneOnly} {
            form {
              display: flex;
              flex-direction: column;
            }

            form :global(.newsletter-email) {
              width: 100% !important;
              margin-bottom: 16px !important;
            }
          }
        `}</style>
      </form>
    );
  }
}

export default NewsletterSignupForm;
