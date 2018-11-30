import {getFragmentFromString, renderScreen} from '../util.js';
import {getWelcomeScreen} from '../welcome/welcome-screen.js';
import {Screens} from '../view/screens.js';


const getResultSuccessScreen = () => {
  const resultSuccessScreenFragment = getFragmentFromString(Screens.resultSuccessScreen);
  renderScreen(resultSuccessScreenFragment);

  const resultReplay = document.querySelector(`.result__replay`);
  resultReplay.addEventListener(`click`, () => {
    getWelcomeScreen();
  });
};


export {getResultSuccessScreen};
