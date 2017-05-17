import React from 'react';
import MaterialTextField from 'material-ui/TextField';

const TextField = props => (
  <MaterialTextField
    floatingLabelText={props.label}
    fullWidth
    value={props.userUpdate[props.name] ? props.userUpdate[props.name] : ''}
    onChange={(e, value) => {
      props.onChange({ [props.name]: value });
    }}
  />
);

export default TextField;
