import React from 'react';
import { Formik, Form, Field } from 'formik';
import { object, number } from 'yup';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Strength from './str.png';
import { Redirect } from 'react-router';
import { TextField } from 'formik-material-ui';
import './form.css';

const skills = [
  { name: 'strength', value: '', modifier: '' },
  { name: 'dexterity', value: '', modifier: '' },
  { name: 'constitution', value: '', modifier: '' },
  { name: 'intelligence', value: '', modifier: '' },
  { name: 'wisdom', value: '', modifier: '' },
  { name: 'charisma', value: '', modifier: '' }
];

const MyForm = props => (
  <Formik
    initialValues={{ skills }}
    onSubmit={values => {
      console.log(values);
    }}
    render={({ values }) => (
      <Form style={{ marginTop: '1em' }}>
        <Grid container justify="space-evenly">
          {values.skills.map((skill, index) => (
            <Grid key={index} className="field">
              <div
                style={{
                  textAlign: 'center',
                  marginTop: '.8em',
                  fontSize: '1.3em'
                }}
              >
                {skill.name}
              </div>
              <TextField
                style={{ width: '30%', left: '3.1em', top: '1.1em' }}
                type="number"
                name={`skills.${index}.value`}
                inputProps={{
                  min: 0,
                  max: 100,
                  style: { textAlign: 'center', fontSize: '1.3em' }
                }}
              />
              <TextField
                style={{ width: '20%', left: '.9em', top: '4.5em' }}
                type="number"
                name={`skills.${index}.modifier`}
                inputProps={{
                  min: 0,
                  max: 100,
                  style: { textAlign: 'center', fontSize: '1.1em' }
                }}
              />
            </Grid>
          ))}
        </Grid>
        <Button
          style={{ marginTop: '1em' }}
          type="submit"
          fullWidth
          color="primary"
          variant="contained"
          size="large"
        >
          Continue
        </Button>
      </Form>
    )}
  ></Formik>
);

export default MyForm;
