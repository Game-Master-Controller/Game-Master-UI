import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Theme from '../../Theme';

const Stepper = props => {
  return (
    <Box bgcolor="primary.main" color="white">
      <Grid container direction="column" spacing={1}>
        <Grid item container justify="center">
          Step {props.step} of 10
        </Grid>
        <Grid item container justify="center">
          {props.name}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Stepper;
