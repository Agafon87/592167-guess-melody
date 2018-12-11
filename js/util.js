import GameGenreView from "./game/game-genre-view";
import GameArtistView from "./game/game-artist-view";

let sectionMain = document.querySelector(`section.main`);


export const getFragmentFromString = (descriptionScreen) => {
  const fragment = document.createDocumentFragment();
  let element = document.createElement(descriptionScreen.tagName);
  let classNameArray = descriptionScreen.classNameElement.split(` `);
  classNameArray.forEach((it) => {
    element.classList.add(it);
  });
  element.innerHTML = descriptionScreen.screenLine;
  fragment.appendChild(element);

  return fragment;
};


export const renderScreen = (element) => {
  sectionMain.innerHTML = ``;
  sectionMain.appendChild(element);
};

export const renderElement = (element, questionBlock) => {
  element.innerHTML = ``;
  element.innerHTML = questionBlock;
};


export const getRandomNumber = () => {
  return Math.round(Math.random() * 2);
};

export const renderGameScreen = (game, data) => {
  const round = data[game.level];
  let partialView;
  if (round.type === `genre`) {
    partialView = new GameGenreView(round, game);
  } else if (round.type === `artist`) {
    partialView = new GameArtistView(round, game);
  }

  return partialView.element;
};


export const nextLevel = (game, data) => {
  if (game.lives === 0) {
    // setTimeout(getFailTriesScreen, 250);
    return;
  }
  game.level = game.level + 1;
  if (game.level >= 10) {
    // getResultSuccessScreen(game, statistic);
    return;
  }
  renderGameScreen(game, data);
};

export const countTime = (currentStatistic) => {
  let initialValue = 0;
  const timeAllRound = currentStatistic.reduce((acc, value) => {
    return acc + value.time;
  }, initialValue);

  const minutes = Math.floor(timeAllRound / 60);
  const second = timeAllRound - (minutes * 60);

  return `${minutes} минуты и ${second} секунды`;
};


export const getPointsScored = (answers) => {
  let scored = 0;
  if (answers.length < 10) {
    return -1;
  }
  answers.forEach((it) => {
    if (!it.correct) {
      scored -= 2;
    } else if (it.correct && it.time < 30) {
      scored += 2;
    } else if (it.correct) {
      scored += 1;
    }
  });

  return scored;
};

export const amountMistakes = (mistakes) => {
  return `, совершив ${mistakes} ошибки`;
};
