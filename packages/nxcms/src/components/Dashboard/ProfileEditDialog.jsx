import React from 'react';
import { connect } from 'react-redux';
import { actions } from 'store';
import EditUserDialog from './EditUserDialog';

/* eslint-disable no-console */
const ProfileEditDialog = props => (
  <EditUserDialog
    user={props.user}
    open={props.open}
    title="Edit Profile"
    onCancel={() => props.dispatch(actions.hideProfileEditDialog())}
    onSubmit={u => console.log(u.toString())}
  />
);

const mapStateToProps = ({ profile, showProfileEditDialog }) => ({
  user: profile,
  open: showProfileEditDialog,
});

export default connect(mapStateToProps)(ProfileEditDialog);
