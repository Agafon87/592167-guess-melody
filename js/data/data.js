export const INITIAL_GAME = Object.freeze({
  level: 0,
  mistakes: 0,
  timeSec: 0,
  timeMin: 5,
  offsetValue: 7.75,
  answers: []
});

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


export const outputResult = (resultAnotherPersons, currentGame) => {
  if (currentGame.timeLeft === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }
  if (currentGame.notes === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }

  let statistics = resultAnotherPersons.slice();
  statistics.push(currentGame.scoredPoints);
  statistics.sort((a, b) => {
    return b - a;
  });
  const placeInStatistics = statistics.indexOf(currentGame.scoredPoints) + 1;
  const succsessRate = Math.round((statistics.length - placeInStatistics) / statistics.length * 100);

  return `Вы заняли ${placeInStatistics} место из ${statistics.length} игроков. Это лучше, чем у ${succsessRate}% игроков`;
};

export const statistic = [];
