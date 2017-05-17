import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const ActionButtons = props => (
  <div>
    <FlatButton label="Cancel" onTouchTap={props.onCancel} />
    <FlatButton
      label="OK"
      disabled={!props.valid}
      onTouchTap={props.onSubmit}
    />
  </div>
);

export default ActionButtons;
