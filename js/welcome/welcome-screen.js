import {getFragmentFromString, renderScreen} from '../util.js';
// import {getGameGenreScreen} from '../view/game-genre-screen.js';
// import {getGameArtistScreen} from '../view/game-artist-screen.js';
import {Screens} from '../view/screens.js';
import {newGame} from '../game/game.js';


const getWelcomeScreen = () => {
  const welcomeScreenFragment = getFragmentFromString(Screens.welcomeScreen);
  renderScreen(welcomeScreenFragment);
  const welcomeButton = document.querySelector(`.welcome__button`);
  welcomeButton.addEventListener(`click`, () => {
    newGame();
    // const game = newGame();
    // getGameGenreScreen(game);
    // getGameArtistScreen();
  });
};


export {getWelcomeScreen};
