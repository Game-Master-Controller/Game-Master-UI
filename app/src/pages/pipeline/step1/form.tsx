import React from 'react';
import { Formik, Field } from 'formik';
import { string, object, number } from 'yup';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from './input';

export interface FormValues {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

const initialValues: FormValues = {
  strength: 0,
  dexterity: 0,
  constitution: 0,
  intelligence: 0,
  wisdom: 0,
  charisma: 0
};

const Form: React.SFC = () => (
  <Formik
    initialValues={initialValues}
    onSubmit={(values: FormValues) => console.log(values)}
    validationSchema={object().shape({
      strength: number()
        .typeError('must be a number')
        .required('required')
        .positive('must be positive'),
      dexterity: number()
        .typeError('must be a number')
        .required('required')
        .positive('must be positive'),
      constitution: number()
        .typeError('must be a number')
        .required('required')
        .positive('must be positive'),
      intelligence: number()
        .typeError('must be a number')
        .required('required')
        .positive('must be positive'),
      wisdom: number()
        .typeError('must be a number')
        .required('required')
        .positive('must be positive'),
      charisma: number()
        .typeError('must be a number')
        .required('required')
        .positive('must be positive')
    })}
    render={({ handleSubmit, errors, touched }) => (
      <form onSubmit={handleSubmit}>
        <Grid container direction="column">
          <Grid>
            <Field
              name="strength"
              render={innerProps => <Input {...innerProps} title="Strength" />}
            />
          </Grid>
          <Grid>
            <Field
              name="dexterity"
              render={innerProps => <Input {...innerProps} title="Dexterity" />}
            />
          </Grid>
          <Grid>
            <Field
              name="constitution"
              render={innerProps => (
                <Input {...innerProps} title="Constitution" />
              )}
            />
          </Grid>
          <Grid>
            <Field
              name="intelligence"
              render={innerProps => (
                <Input {...innerProps} title="Intelligence" />
              )}
            />
          </Grid>
          <Grid>
            <Field
              name="wisdom"
              render={innerProps => <Input {...innerProps} title="Widsom" />}
            />
          </Grid>
          <Grid>
            <Field
              name="charisma"
              render={innerProps => <Input {...innerProps} title="Charisma" />}
            />
          </Grid>
        </Grid>
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
    )}
  ></Formik>
);

export default Form;
