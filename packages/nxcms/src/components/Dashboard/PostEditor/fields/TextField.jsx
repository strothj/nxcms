import React from 'react';
import { FormField } from 'react-form';
import MaterialTextField from 'material-ui/TextField';

const TextField = ({ field, ...props }) => (
  <FormField field={field}>
    {({ setValue, getValue, setTouched, getTouched, getError }) => (
      <MaterialTextField
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

export default TextField;
