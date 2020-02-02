import React from "react";
import { FieldProps } from "formik";
import { FormValues } from "./FirstForm";


interface Props {
    title: string;
}

type OwnProps = FieldProps<FormValues> & Props;
const TextField: React.SFC<OwnProps> = ({ title, field, form }) => (
    <label htmlFor={field.name}>
        <h2>{title}</h2>
        <input type="text" {...field}/>
        {
            form.touched[field.name] && form.errors[field.name]
            ? <div>{form.errors[field.name]}</div>
            : null
        }
    </label>
);

export default TextField;
