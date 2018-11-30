import {INITIAL_GAME} from '../data/data.js';

export const newGame = () => {
  const game = Object.assign({}, INITIAL_GAME);
  return game;
};
