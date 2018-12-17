import GameGenreView from "./game/game-genre-view";
import GameArtistView from "./game/game-artist-view";


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


const normalizeTextForNum = (text, forms, num) => {
  let end = ``;

  if (num % 100 !== 11 && num % 10 === 1) {
    end = forms[0];
  } else if (num % 10 > 1 && num % 10 < 5 && Math.floor((num % 100) / 10) !== 1) {
    end = forms[1];
  } else {
    end = forms[2];
  }
  return `${text}${end}`;
};

export const getResultTotal = (gameStat) => {
  const {answers, time, mistakes} = gameStat;

  const fastAnswers = answers.filter((answer) => answer === 2).length;
  const fastAnswersText = normalizeTextForNum(`быстры`, [`й`, `х`, `х`], fastAnswers);
  const minuts = Math.floor(time / 60);
  const minutsText = normalizeTextForNum(`минут`, [`у`, `ы`, ``], minuts);
  const seconds = time % 60;
  const secondsText = normalizeTextForNum(`секунд`, [`у`, `ы`, ``], seconds);
  const points = answers.reduce((acc, ind) => {
    return acc + ind;
  });
  const mistakesText = normalizeTextForNum(`ошиб`, [`ку`, `ки`, `ок`], mistakes);


  return `За ${minuts} ${minutsText} и ${seconds} ${secondsText} вы набрали ${points} баллов (${fastAnswers} ${fastAnswersText}), совершив ${mistakes} ${mistakesText}`;
};

export const getResultText = (gameStat, allStat) => {

  const statistics = allStat.map((it) => {
    return it.answers.reduce((acc, idx) => {
      return acc + idx;
    });
  });

  const points = gameStat.answers.reduce((acc, idx) => {
    return acc + idx;
  });

  statistics.push(points);
  statistics.sort((a, b) => {
    return b - a;
  });
  const placeInStatistics = statistics.indexOf(points) + 1;
  const succsessRate = Math.round((statistics.length - placeInStatistics) / statistics.length * 100);

  return `Вы заняли ${placeInStatistics} место из ${statistics.length} игроков. Это лучше, чем у ${succsessRate}% игроков`;
};
