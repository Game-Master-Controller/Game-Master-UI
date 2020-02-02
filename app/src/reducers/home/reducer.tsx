import { ActionTypes } from '../rootReducer';
import { GameAction } from './actions';

export interface GameState {
  game: string;
}

const initialState: GameState = {
  game: ""
};

export default function(state: GameState = initialState, action: GameAction) {
  switch (action.type) {
    case ActionTypes.SET_GAME:
      return { ...state, game: action.data};
    default:
      return state;
  }
}