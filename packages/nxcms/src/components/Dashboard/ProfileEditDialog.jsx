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
    errorMessage={props.errorMessage}
    onCancel={() => props.dispatch(actions.hideProfileEditDialog())}
    onSubmit={u => props.dispatch(actions.updateProfile(u))}
  />
);

const mapStateToProps = ({
  profile,
  profileUpdateError,
  showProfileEditDialog,
}) => ({
  user: profile,
  open: showProfileEditDialog,
  errorMessage: profileUpdateError,
});

export default connect(mapStateToProps)(ProfileEditDialog);
