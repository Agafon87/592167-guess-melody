// удалить файл в релизе

import {getFragmentFromString, renderScreen, countTime, getPointsScored} from '../util.js';
import {amountMistakes} from '../data/data.js';


const resultSuccessScreen = (game, statistic) => {
  return {
    tagName: `section`,
    classNameElement: `result`,
    screenLine: `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Вы настоящий меломан!</h2>
    <p class="result__total">За ${countTime(statistic)} вы набрали ${getPointsScored(statistic)}${amountMistakes(game.lives)}</p>
    <p class="result__text">Вы заняли 2 место из 10. Это лучше чем у 80% игроков</p>
    <button class="result__replay" type="button">Сыграть ещё раз</button>`
  };
};

const getResultSuccessScreen = (game, statistic) => {
  const resultSuccessScreenFragment = getFragmentFromString(resultSuccessScreen(game, statistic));
  renderScreen(resultSuccessScreenFragment);

  const resultReplay = document.querySelector(`.result__replay`);
  resultReplay.addEventListener(`click`, () => {
  });
};


export {
  getResultSuccessScreen
};
