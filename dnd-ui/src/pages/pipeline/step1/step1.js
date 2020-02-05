import React from 'react';
import Container from '@material-ui/core/Container';
import Form from './form';
import Stepper from '../stepper';

export const Step1 = (props) => {
  return (
    <React.Fragment>
      <Stepper name="Assign Abilities" step="1" />
      <Container>
        <Form history={props.history}/>
      </Container>
    </React.Fragment>
  );
};

export default Step1;
