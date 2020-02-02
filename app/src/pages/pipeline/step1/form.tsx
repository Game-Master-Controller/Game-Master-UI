import React from "react";
import { Formik, Field } from "formik";
import { string, object } from "yup";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from './input';

export interface FormValues {
    firstName: string;
}

const initialValues: FormValues = {
    firstName: ""
};

const Form: React.SFC = () => (
    <>
        <Formik 
            initialValues={initialValues}
            onSubmit={(values: FormValues) => console.log(values)}
            validationSchema={object().shape({
                firstName: string().required("Required*"),
            })}
            render={({ handleSubmit, errors, touched }) => (
                <form onSubmit={handleSubmit}>
                     <Field name="firstName" render={(innerProps) => (
                        <Input {...innerProps} title="First Name"/>
                    )}/>
                    <Button
                        type="submit"
                        fullWidth
                        color="primary"
                        variant="contained"
                        size="large"
                        >
                            Submit
                    </Button>
                </form>
            )}>
        </Formik>
    </>
);

export default Form;
