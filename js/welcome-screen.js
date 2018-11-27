import {getFragmentFromString, renderScreen} from './util.js';
import {getGameGenreScreen} from './game-genre-screen.js';
import {Screens} from './screens.js';


const getWelcomeScreen = () => {
  const welcomeScreenFragment = getFragmentFromString(Screens.welcomeScreen);
  renderScreen(welcomeScreenFragment);
  const welcomeButton = document.querySelector(`.welcome__button`);
  welcomeButton.addEventListener(`click`, () => {
    getGameGenreScreen();
  });
};


export {getWelcomeScreen};
