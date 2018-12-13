import {assert} from 'chai';
import {getResultText} from './util';


// const playerScored10Points = [
//   {correct: true, time: 30},
//   {correct: true, time: 30},
//   {correct: true, time: 30},
//   {correct: true, time: 30},
//   {correct: true, time: 30},
//   {correct: true, time: 30},
//   {correct: true, time: 30},
//   {correct: true, time: 30},
//   {correct: true, time: 30},
//   {correct: true, time: 30}
// ];
// const playerLost = [
//   {correct: false, time: 30},
//   {correct: false, time: 30},
//   {correct: false, time: 30}
// ];
// const playerScoredMore10Points = [
//   {correct: true, time: 30},
//   {correct: true, time: 30},
//   {correct: true, time: 20},
//   {correct: true, time: 10},
//   {correct: true, time: 14},
//   {correct: true, time: 34},
//   {correct: true, time: 12},
//   {correct: true, time: 30},
//   {correct: true, time: 30},
//   {correct: true, time: 30}
// ];

// const timeLost = {
//   scoredPoints: 10,
//   notes: 2,
//   timeLeft: 0
// };
// const notesLost = {
//   scoredPoints: 10,
//   notes: 0,
//   timeLeft: 10
// };

// const normalGame = {
//   scoredPoints: 13,
//   notes: 2,
//   timeLeft: 10
// };

const gameStat = {
  answers: [2, 1, 2, 1, -2, -2, 1, 1, 1, 1],
  mistakes: 2,
  time: 154
};

const resultAnotherPersonsLocal = [4, 5, 8, 12, 14];


// describe(`Проверка функции подсчета очков`, () => {
//   it(`Должна вернуть 10, если есть ответы на все вопросы и они не быстрые`, () => {
//     assert.equal(getPointsScored(playerScored10Points), 10);
//   });
//   it(`Должна вернуть -1, если игрок не ответил на все 10 вопросов`, () => {
//     assert.equal(getPointsScored(playerLost), -1);
//   });
//   it(`Должна вернуть больше 10, если игрок хороший меломан`, () => {
//     assert(getPointsScored(playerScoredMore10Points) > 10);
//   });
// });

describe(`Проверка функции вывода места игрока в статистике`, () => {
  it(`Проверка, что правильно вычисляется процент в статистике`, () => {
    assert.equal(getResultText(gameStat, resultAnotherPersonsLocal), `Вы заняли 4 место из 6 игроков. Это лучше, чем у 33% игроков`);
  });
  // it(`Проверка, что закончились все жизни`, () => {
  //   assert.equal(getResultText(resultAnotherPersonsLocal, notesLost), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  // });
  // it(`Проверка правильного подсчета места в статистике`, () => {
  //   assert.equal(getResultText(resultAnotherPersonsLocal, normalGame), `Вы заняли 2 место из 6 игроков. Это лучше, чем у 67% игроков`);
  // });
});

// describe(`Проверка функции переключения уровней`, () => {
//   it(`Проверяем что уровни переключаются корректно`, () => {
//     // assert.equal(nextLevel(INITIAL_GAME, 1).level, 1);
//     // assert.equal(nextLevel(INITIAL_GAME, 3).level, 3);
//     // assert.equal(nextLevel(INITIAL_GAME, 6).level, 6);
//     // assert.equal(nextLevel(INITIAL_GAME, 9).level, 9);
//     // assert.equal(nextLevel(INITIAL_GAME, 10).level, 10);
//   });
// });