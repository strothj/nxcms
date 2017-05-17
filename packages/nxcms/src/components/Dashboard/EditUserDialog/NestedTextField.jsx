import React from 'react';
import TextField from 'material-ui/TextField';

const style = { top: -24 };

// Eat the nestedLevel prop from the list control so it is not passed down into
// the child text input.
const NestedTextField = ({ nestedLevel, ...props }) => (
  <TextField {...props} style={style} />
);

export default NestedTextField;
