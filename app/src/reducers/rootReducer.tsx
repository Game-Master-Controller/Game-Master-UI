import { combineReducers } from 'redux';
import home from './home/reducer';

export enum ActionTypes {
  GET_MOVIE = 'GET_MOVIE',
  GET_MOVIES = 'GET_MOVIES',
  RESET_MOVIE = 'RESET_MOVIE',
  SET_GAME = 'SET_GAME'
}

export interface BaseAction {
  type: ActionTypes;
}

const rootReducer = combineReducers({
  home
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;