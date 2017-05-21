import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  height: 200,
  paddingTop: 32,
  textAlign: 'right',
};

const SubmitButton = ({ disabled }) => (
  <div style={style}>
    <RaisedButton type="submit" secondary disabled={disabled}>
      Submit
    </RaisedButton>
  </div>
);

export default SubmitButton;
