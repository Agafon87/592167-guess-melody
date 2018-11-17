import {getFragmentFromString, renderScreen} from './util.js';
import {getWelcomeScreen} from './welcome-screen.js';

const tagName = `section`;
const classNameElement = `result`;
const welcomeScreen = `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
<h2 class="result__title">Увы и ах!</h2>
<p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
<button class="result__replay" type="button">Попробовать ещё раз</button>`;

const getFailTimeScreen = () => {
  const failTimeScreenFragment = getFragmentFromString(welcomeScreen, tagName, classNameElement);
  renderScreen(failTimeScreenFragment);

  const resultReplay = document.querySelector(`.result__replay`);
  resultReplay.addEventListener(`click`, () => {
    getWelcomeScreen();
  });
};

export {getFailTimeScreen};
