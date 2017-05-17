import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const values = ['username', 'name', 'email'];

const DisplayName = props => (
  <SelectField
    floatingLabelText="Display Name"
    fullWidth
    value={props.userUpdate.displayNameUse}
    onChange={(e, value) => {
      props.onChange({ displayNameUse: values[value] });
    }}
  >
    <MenuItem value={'username'} primaryText="Username" />
    <MenuItem value={'name'} primaryText="Name" />
    <MenuItem value={'email'} primaryText="Email" />
  </SelectField>
);

export default DisplayName;
