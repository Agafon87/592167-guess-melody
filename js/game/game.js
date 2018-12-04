import {getFragmentFromString, renderScreen} from '../util.js';
import {getWelcomeScreen} from '../welcome/welcome-screen.js';
import {header} from '../view/header.js';
import {renderQuestionBlockForGenre} from '../view/game-genre-screen.js';
import {renderQuestionBlockForArtist} from '../view/game-artist-screen.js';
import {getFailTriesScreen} from '../view/fail-tries-screen.js';
import {INITIAL_GAME, statistic} from '../data/data.js';
import {getResultSuccessScreen} from '../view/result-success-screen.js';
import musicData from '../data/musicData.js';
import {changeTimer} from '../timer.js';


const nextLevel = (game) => {
  if (game.lives === 0) {
    setTimeout(getFailTriesScreen, 250);
    return;
  }
  game.level = game.level + 1;
  if (game.level >= 10) {
    getResultSuccessScreen(game, statistic);
    return;
  }
  renderGameScreen(game);
};

const renderGameScreen = (currentGame) => {
  const round = musicData[currentGame.level];
  if (round.type === `genre`) {
    renderQuestionBlockForGenre(round, currentGame);
  } else if (round.type === `artist`) {
    renderQuestionBlockForArtist(round, currentGame);
  }
};

export const newGame = () => {
  const currentGame = Object.assign({}, INITIAL_GAME);
  statistic.splice(0, statistic.length);


  const gameGenreScreen = {tagName: `section`, classNameElement: `game game--genre`, screenLine: `<section class="game__screen"></section>`};
  const gameGenreScreenFragment = getFragmentFromString(gameGenreScreen);
  const headerFragment = getFragmentFromString(header);
  gameGenreScreenFragment.firstChild.insertBefore(headerFragment, gameGenreScreenFragment.firstChild.firstChild);
  renderScreen(gameGenreScreenFragment);

  const gameLogo = document.querySelector(`.game__logo`);

  // Обработчик события клика по иконке
  gameLogo.addEventListener(`click`, () => {
    getWelcomeScreen();
  });


  renderGameScreen(currentGame);
  changeTimer(currentGame);
};

export {nextLevel};
