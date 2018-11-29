import {assert} from 'chai';
import {getPointsScored, outputResult, changeLevel, INITIAL_GAME} from './game.js';

const playerScored10Points = [
  {answer: true, time: 30},
  {answer: true, time: 30},
  {answer: true, time: 30},
  {answer: true, time: 30},
  {answer: true, time: 30},
  {answer: true, time: 30},
  {answer: true, time: 30},
  {answer: true, time: 30},
  {answer: true, time: 30},
  {answer: true, time: 30}
];
const playerLost = [
  {answer: false, time: 30},
  {answer: false, time: 30},
  {answer: false, time: 30}
];
const playerScoredMore10Points = [
  {answer: true, time: 30},
  {answer: true, time: 30},
  {answer: true, time: 20},
  {answer: true, time: 10},
  {answer: true, time: 14},
  {answer: true, time: 34},
  {answer: true, time: 12},
  {answer: true, time: 30},
  {answer: true, time: 30},
  {answer: true, time: 30}
];

const timeLost = {
  scoredPoints: 10,
  notes: 2,
  timeLeft: 0
};
const notesLost = {
  scoredPoints: 10,
  notes: 0,
  timeLeft: 10
};

const normalGame = {
  scoredPoints: 13,
  notes: 2,
  timeLeft: 10
};

const resultAnotherPersonsLocal = [4, 5, 8, 12, 14];


describe(`Проверка функции подсчета очков`, () => {
  it(`Должна вернуть 10, если есть ответы на все вопросы и они не быстрые`, () => {
    assert.equal(getPointsScored(playerScored10Points), 10);
  });
  it(`Должна вернуть -1, если игрок не ответил на все 10 вопросов`, () => {
    assert.equal(getPointsScored(playerLost), -1);
  });
  it(`Должна вернуть больше 10, если игрок хороший меломан`, () => {
    assert(getPointsScored(playerScoredMore10Points) > 10);
  });
});

describe(`Проверка функции вывода результата игрока`, () => {
  it(`Проверка, что вышло все время`, () => {
    assert.equal(outputResult(resultAnotherPersonsLocal, timeLost), `Время вышло! Вы не успели отгадать все мелодии`);
  });
  it(`Проверка, что закончились все жизни`, () => {
    assert.equal(outputResult(resultAnotherPersonsLocal, notesLost), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });
  it(`Проверка правильного подсчета места в статистике`, () => {
    assert.equal(outputResult(resultAnotherPersonsLocal, normalGame), `Вы заняли 2 место из 6 игроков. Это лучше, чем у 67% игроков`);
  });
});

describe(`Проверка функции переключения уровней`, () => {
  it(`Проверяем что уровни переключаются корректно`, () => {
    assert.equal(changeLevel(INITIAL_GAME, 1).level, 1);
    assert.equal(changeLevel(INITIAL_GAME, 3).level, 3);
    assert.equal(changeLevel(INITIAL_GAME, 6).level, 6);
    assert.equal(changeLevel(INITIAL_GAME, 9).level, 9);
    assert.equal(changeLevel(INITIAL_GAME, 10).level, 10);
  });
});
