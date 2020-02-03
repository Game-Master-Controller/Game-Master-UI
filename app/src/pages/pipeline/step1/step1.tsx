import React from 'react';
import Container from '@material-ui/core/Container';
import Form from './form';
import TextField from '@material-ui/core/TextField';
import Stepper from '../stepper';

export const Step1 = () => {
  return (
    <React.Fragment>
      <Stepper name="Assign Saving Throws" step="1" />
      <Container>
        <Form />
      </Container>
    </React.Fragment>
  );
};

export default Step1;
