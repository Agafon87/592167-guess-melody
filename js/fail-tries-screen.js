import {getFragmentFromString, renderScreen} from './util.js';
import {getWelcomeScreen} from './welcome-screen.js';

const tagName = `section`;
const classNameElement = `result`;
const welcomeScreen = `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
<h2 class="result__title">Какая жалость!</h2>
<p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
<button class="result__replay" type="button">Попробовать ещё раз</button>`;

const getFailTriesScreen = () => {
  const failTriesScreenFragment = getFragmentFromString(welcomeScreen, tagName, classNameElement);
  renderScreen(failTriesScreenFragment);

  const resultReplay = document.querySelector(`.result__replay`);
  resultReplay.addEventListener(`click`, () => {
    getWelcomeScreen();
  });
};

export {getFailTriesScreen};
