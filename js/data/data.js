import DefaultValueGame from "./default-value-game";

export const INITIAL_GAME = Object.freeze({
  time: DefaultValueGame.START_TIME,
  currentRoundTime: 0,
  mistakes: 0,
  currentRound: 0,
  answers: []
});
