import { ActionTypes, BaseAction } from '../rootReducer';

export interface GameAction extends BaseAction {
  type: ActionTypes.SET_GAME;
  data: string
}

export const setGame = (game: string): GameAction => {
  return {
    type: ActionTypes.SET_GAME,
    data: game
  };
}