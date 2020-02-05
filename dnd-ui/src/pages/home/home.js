import React, { useState } from 'react';
import Button from '@material-ui/core//Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

export const Home = (props) => {
  const [searchedGame, setSearchedGame] = useState('');
  const [createdGame, setCreatedGame] = useState('');

  return (
    <Container>
      <Grid container justify="center" alignItems="center">
        <Grid item container justify="center" style={{ marginBottom: '6em' }}>
          <h1>Welcome Player 23456</h1>
        </Grid>
        <Grid item>
          <Button
            fullWidth
            color="primary"
            variant="contained"
            size="large"
            onClick={() => props.history.push('/step1')}
          >
            Set up Player
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;