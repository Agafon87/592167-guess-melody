import {assert} from 'chai';
import {getResultText} from './util';


const anotherStat = [
  {
    "answers": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    "time": 25,
    "mistakes": 0,
    "date": 1544944725652
  },
  {"answers": [2, 2, 2, 2, 2, 2, -2, 2, 2, 2], "time": 57, "mistakes": 0, "date": 1544945955032},
  {"answers": [2, 1, 1, 2, 2, 2, 2, 1, 2, 2], "time": 46, "mistakes": 0, "date": 1544946093287},
  {"answers": [1, 2, 1, 2, -2, 2, 2, 2, 1, 2], "time": 45, "mistakes": 0, "date": 1544946275428},
  {"answers": [1, 2, 1, 2, -2, 2, 2, -2, 2, 2], "time": 40, "mistakes": 0, "date": 1544946827808},
  {"answers": [1, 2, 1, 2, -2, 2, 1, 2, 2, 2], "time": 63, "mistakes": 0, "date": 1544947022169},
  {"answers": [1, 2, 2, 2, -2, 2, 2, 1, 2, 2], "time": 37, "mistakes": 0, "date": 1544947116745},
  {"answers": [2, 2, 1, 2, 1, 2, 1, 2, -2, 2], "time": 26, "mistakes": 0, "date": 1544947205537}
];

const gameStat = {
  answers: [2, 1, 2, 1, -2, -2, 1, 1, 1, 1],
  mistakes: 2,
  time: 154
};


describe(`Проверка функции вывода места игрока в статистике`, () => {
  it(`Проверка, что правильно вычисляется процент в статистике`, () => {
    assert.equal(getResultText(gameStat, anotherStat), `Вы заняли 9 место из 9 игроков. Это лучше, чем у 0% игроков`);
  });
});
