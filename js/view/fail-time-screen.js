// удалить файл в релизе

import {getFragmentFromString, renderScreen} from '../util.js';
// import {getWelcomeScreen} from '../welcome/welcome-screen.js';
import {Screens} from '../view/screens.js';


const getFailTimeScreen = () => {
  const failTimeScreenFragment = getFragmentFromString(Screens.failTimeScreen);
  renderScreen(failTimeScreenFragment);

  const resultReplay = document.querySelector(`.result__replay`);
  resultReplay.addEventListener(`click`, () => {
    // getWelcomeScreen();
  });
};

export {getFailTimeScreen};
