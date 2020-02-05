import React from 'react';
import { Formik, Form, Field } from 'formik';
import { object, number } from 'yup';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { TextField, Checkbox } from 'formik-material-ui';
import { InputLabel } from '@material-ui/core';
import './form.css';

const skills = [
  { name: 'Acrobatics', value: '', isValuble: false, type: '(Dex)' },
  { name: 'AnimalHandling', value: '', isValuble: false, type: '(Wis)' },
  { name: 'Arcana', value: '', isValuble: false, type: '(Int)' },
  { name: 'Athletics', value: '', isValuble: false, type: '(Str)' },
  { name: 'Deception', value: '', isValuble: false, type: '(Cha)' },
  { name: 'History', value: '', isValuble: false, type: '(Int)' },
  { name: 'Insight', value: '', isValuble: false, type: '(Wis)' },
  { name: 'Intimidation', value: '', isValuble: false, type: '(Cha)' },
  { name: 'Investigation', value: '', isValuble: false, type: '(Int)' },
  { name: 'Medicine', value: '', isValuble: false, type: '(Wis)' },
  { name: 'Nature', value: '', isValuble: false, type: '(Int)' },
  { name: 'Perception', value: '', isValuble: false, type: '(Wis)' },
  { name: 'Performance', value: '', isValuble: false, type: '(Cha)' },
  { name: 'Persuasion', value: '', isValuble: false, type: '(Cha)' },
  { name: 'Religion', value: '', isValuble: false, type: '(Int)' },
  { name: 'SleightOfHand', value: '', isValuble: false, type: '(Dex)' },
  { name: 'Stealth', value: '', isValuble: false, type: '(Dex)' },
  { name: 'Survival', value: '', isValuble: false, type: '(Wis)' }
];

const MyForm = () => (
  <Formik
    initialValues={{ skills }}
    onSubmit={values => console.log(values)}
    render={({ values }) => (
      <Form style={{ marginTop: '1em' }}>
        <Grid
          className="form"
          container
          item
          justify="center"
          style={{ paddingBottom: '3em' }}
          xs={12}
          sm={6}
          md={4}
          lg={4}
        >
          <Grid
            style={{ paddingTop: '2em' }}
            container
            direction="row"
            justify="space-around"
            item
            xs={10}
          >
            <div style={{ paddingBottom: '1em', fontSize: '1.3em' }}>
              Skills
            </div>
            {values.skills.map((skill, index) => (
              <Grid
                item
                container
                key={index}
                direction="row"
                justify="space-around"
              >
                <Grid item xs={1}>
                  <Checkbox name={`skills.${index}.isValuble`} />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    type="number"
                    name={`skills.${index}.value`}
                    inputProps={{
                      style: {
                        textAlign: 'center',
                        fontSize: '1.3em'
                      }
                    }}
                  />
                </Grid>
                <Grid container item xs={6} direction="row">
                  <Grid style={{ lineHeight: '2.5em', paddingRight: '.3em' }}>
                    {skill.name}
                  </Grid>
                  <Grid style={{ lineHeight: '2.5em', color: 'gray' }}>
                    {skill.type}
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
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
