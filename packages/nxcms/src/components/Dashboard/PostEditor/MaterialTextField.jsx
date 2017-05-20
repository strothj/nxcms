import React from 'react';
import { FormField } from 'react-form';
import TextField from 'material-ui/TextField';

const MaterialTextField = ({ field, ...props }) => (
  <FormField field={field}>
    {({ setValue, getValue, setTouched, getTouched, getError }) => (
      <TextField
        name={field}
        value={getValue() || ''}
        onChange={e => setValue(e.target.value)}
        onBlur={() => setTouched()}
        errorText={getTouched() && getError()}
        fullWidth
        {...props}
      />
    )}
  </FormField>
);

export default MaterialTextField;
