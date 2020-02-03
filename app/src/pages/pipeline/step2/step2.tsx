import React from 'react';
import Container from '@material-ui/core/Container';
import Form from './form';
import TextField from '@material-ui/core/TextField';
import Stepper from '../stepper';

export const Step2 = () => {
  return (
    <React.Fragment>
      <Stepper step="2" />
      <Container>
        <Form />
      </Container>
    </React.Fragment>
  );
};

export default Step2;
