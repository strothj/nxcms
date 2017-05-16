import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

import { actions } from 'store';
import { Headline } from 'components/Typography';

const styles = {
  dialog: { contentStyle: { maxWidth: 400 } },
};

class ProfileEditDialog extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Dialog
        open={this.props.showProfileEditDialog}
        autoScrollBodyContent
        onRequestClose={() =>
          this.props.dispatch(actions.hideProfileEditDialog())}
        {...styles.dialog}
      >
        <form onSubmit={this.handleSubmit}>
          <Headline>Edit Profile</Headline>
          <TextField floatingLabelText="Username" fullWidth />
          <SelectField floatingLabelText="Display Name" fullWidth>
            <MenuItem value={1} primaryText="Username" />
            <MenuItem value={2} primaryText="Name" />
            <MenuItem value={3} primaryText="Email" />
          </SelectField>
          <List>
            <ListItem
              primaryText="Change Password"
              primaryTogglesNestedList
              nestedItems={[
                <TextField
                  floatingLabelText="Password"
                  type="password"
                  fullWidth
                />,
                <TextField
                  floatingLabelText="Confirm Password"
                  type="password"
                  fullWidth
                />,
              ]}
            />
          </List>
          <List>
            <ListItem
              primaryText="Change Email"
              primaryTogglesNestedList
              nestedItems={[
                <TextField floatingLabelText="Email" type="email" fullWidth />,
                <TextField
                  floatingLabelText="Confirm Email"
                  type="email"
                  fullWidth
                />,
              ]}
            />
          </List>
          <div
            style={{
              textAlign: 'right',
              padding: 8,
              margin: '24 -24px -24px -24px',
            }}
          >
            <FlatButton label="Cancel" primary />
            <FlatButton label="OK" primary />
          </div>
        </form>
      </Dialog>
    );
  }
}

const mapStateToProps = ({ profile, showProfileEditDialog }) => ({
  profile,
  showProfileEditDialog,
});

export default connect(mapStateToProps)(ProfileEditDialog);
