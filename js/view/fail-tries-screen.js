// удалить файл в релизе

import {getFragmentFromString, renderScreen} from '../util.js';
// import {getWelcomeScreen} from '../welcome/welcome-screen.js';
import {Screens} from '../view/screens.js';


const getFailTriesScreen = () => {
  const failTriesScreenFragment = getFragmentFromString(Screens.failTriesScreen);
  renderScreen(failTriesScreenFragment);

  const resultReplay = document.querySelector(`.result__replay`);
  resultReplay.addEventListener(`click`, () => {
    // getWelcomeScreen();
  });
};

export {getFailTriesScreen};
