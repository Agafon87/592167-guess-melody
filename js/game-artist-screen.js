import {getFragmentFromString, renderScreen, getRandomNumber} from './util.js';
import {getWelcomeScreen} from './welcome-screen.js';
import {getResultSuccessScreen} from './result-success-screen.js';
import {getFailTimeScreen} from './fail-time-screen.js';
import {getFailTriesScreen} from './fail-tries-screen.js';
import {Screens} from './screens.js';


const getGameArtistScreen = () => {
  const gameArtistScreenFragment = getFragmentFromString(Screens.gameArtistScreen);
  renderScreen(gameArtistScreenFragment);

  const gameLogo = document.querySelector(`.game__logo`);
  const answerRadio = document.querySelectorAll(`input[type="radio"]`);

  for (let it of answerRadio) {
    it.addEventListener(`click`, () => {
      const number = getRandomNumber();
      switch (number) {
        case 0:
          getResultSuccessScreen();
          break;
        case 1:
          getFailTimeScreen();
          break;
        case 2:
          getFailTriesScreen();
          break;
      }
    });
  }

  gameLogo.addEventListener(`click`, () => {
    getWelcomeScreen();
  });
};

export {getGameArtistScreen};
