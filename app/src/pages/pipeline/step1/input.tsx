import React from 'react';
import { FieldProps } from 'formik';
import { FormValues } from './form';
import TextField from '@material-ui/core/TextField';

interface Props {
  title: string;
}

type InputProps = FieldProps<FormValues> & Props;

const Input: React.SFC<InputProps> = ({ title, field, form }) => {
  const error: boolean = form.touched[field.name] && form.errors[field.name];
  return (
    <TextField
      type="number"
      helperText={error}
      error={error}
      label={title}
      inputProps={{ ...field, min: 0, max: 100 }}
    />
  );
};

export default Input;
