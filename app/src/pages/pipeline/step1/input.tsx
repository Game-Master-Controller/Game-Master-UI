import React from "react";
import { FieldProps } from "formik";
import { FormValues } from "./form";
import TextField from '@material-ui/core/TextField';


interface Props {z
    title: string;
}

type InputProps = FieldProps<FormValues> & Props;

const Input: React.SFC<InputProps> = ({ title, field, form }) => {
    const error: boolean = form.touched[field.name] && form.errors[field.name]
    return(
        <TextField 
            helperText={error}
            error={error}
            label={title} inputProps={{...field}}/>

)};

export default Input;
