import React, { useState } from 'react';
import Button from '@material-ui/core//Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { MapDispatchToPropsFunction } from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { AppState } from '../../reducers/rootReducer';
import { GameAction, setGame } from '../../reducers/home/actions';


export const Home: React.FC<ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>> = ({
  setGame
}) => {

  const [searchedGame, setSearchedGame] = useState('');
  const [createdGame, setCreatedGame] = useState('');

  return (
    <Container>
      <Grid container justify="center" alignItems="center">
        <Grid item container justify="center" style={{ marginBottom: '6em' }}>
          <h1>Dungeons And Dragons</h1>
        </Grid>

        <Grid
          spacing={4}
          item
          container
          alignItems="stretch"
          justify="center"
          direction="column"
          style={{ maxWidth: '30em' }}
        >
          <Grid item>
            <TextField
              value={searchedGame}
              fullWidth
              placeholder="Enter A Game Code"
              onChange={e => {
                setSearchedGame(e.target.value);
              }}
              inputProps={{ maxLength: 12 }}
            />
          </Grid>
          <Grid item>
            <Button
              fullWidth
              color="secondary"
              variant="contained"
              size="large"
              disabled={!searchedGame}
              onClick={() => setGame("Hello")}
            >
              Join A Game
            </Button>
          </Grid>
          <Grid item container alignItems="center" justify="center">
            <h3>or</h3>
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              placeholder="Create Game"
              onChange={e => {
                setCreatedGame(e.target.value);
              }}
              // InputProps={{
              //   endAdornment: <InputAdornment position="end">Kg</InputAdornment>
              // }}
              inputProps={{ maxLength: 12 }}
            />
          </Grid>
          <Grid item>
            <Button
              fullWidth
              color="primary"
              variant="contained"
              size="large"
              disabled={!createdGame}
            >
              Create A Game
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state: AppState) => ({
  game: state.home.game
});

const mapDispatchToProps = (dispatch: Dispatch<GameAction>) => {
  return {
    setGame: (data: string) => dispatch(setGame(data))
}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);