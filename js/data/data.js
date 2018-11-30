export const INITIAL_GAME = {
  level: 0,
  lives: 3,
  time: 600
};


export const nextLevel = (game, level) => {
  const newGame = Object.assign({}, game, {
    level
  });
  return newGame;
};

export const getPointsScored = (answers) => {
  let scored = 0;
  if (answers.length < 10) {
    return -1;
  }
  answers.forEach((it) => {
    if (!it.answer) {
      scored -= 2;
    } else if (it.answer && it.time < 30) {
      scored += 2;
    } else if (it.answer) {
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

// export const questionList = {
//   'level-0': {
//     question: `Выберите R&B треки`,
//     correctGenre: `R&B`,
//     answers: {
//       firstSound: {
//         artist: `Riot`,
//         name: `Level Plane`,
//         image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
//         genre: `R&B`
//       },
//       secondSound: {
//         artist: `Audionautix`,
//         name: `Travel Light`,
//         image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
//         genre: `Country`
//       },
//       thirdSound: {
//         artist: `Kevin MacLeod`,
//         name: `Long Stroll`,
//         image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
//         genre: `Jazz`
//       },
//       fourthSound: {
//         artist: `Jingle Punks`,
//         name: `In the Land of Rhinoplasty`,
//         image: `https://i.vimeocdn.com/portrait/992615_300x300`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
//         genre: `Rock`
//       }
//     }
//   },
//   'level-1': {
//     question: `Выберите Country треки`,
//     correctGenre: `Country`,
//     answers: {
//       firstSound: {
//         artist: `Riot`,
//         name: `Level Plane`,
//         image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
//         genre: `R&B`
//       },
//       secondSound: {
//         artist: `Audionautix`,
//         name: `Travel Light`,
//         image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
//         genre: `Country`
//       },
//       thirdSound: {
//         artist: `Kevin MacLeod`,
//         name: `Long Stroll`,
//         image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
//         genre: `Jazz`
//       },
//       fourthSound: {
//         artist: `Jingle Punks`,
//         name: `In the Land of Rhinoplasty`,
//         image: `https://i.vimeocdn.com/portrait/992615_300x300`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
//         genre: `Rock`
//       }
//     }
//   },
//   'level-2': {
//     question: `Выберите Jazz треки`,
//     correctGenre: `Jazz`,
//     answers: {
//       firstSound: {
//         artist: `Riot`,
//         name: `Level Plane`,
//         image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
//         genre: `R&B`
//       },
//       secondSound: {
//         artist: `Audionautix`,
//         name: `Travel Light`,
//         image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
//         genre: `Country`
//       },
//       thirdSound: {
//         artist: `Kevin MacLeod`,
//         name: `Long Stroll`,
//         image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
//         genre: `Jazz`
//       },
//       fourthSound: {
//         artist: `Jingle Punks`,
//         name: `In the Land of Rhinoplasty`,
//         image: `https://i.vimeocdn.com/portrait/992615_300x300`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
//         genre: `Rock`
//       }
//     }
//   },
//   'level-3': {
//     question: `Выберите Rock треки`,
//     correctGenre: `Country`,
//     answers: {
//       firstSound: {
//         artist: `Riot`,
//         name: `Level Plane`,
//         image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
//         genre: `R&B`
//       },
//       secondSound: {
//         artist: `Audionautix`,
//         name: `Travel Light`,
//         image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
//         genre: `Country`
//       },
//       thirdSound: {
//         artist: `Kevin MacLeod`,
//         name: `Long Stroll`,
//         image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
//         genre: `Jazz`
//       },
//       fourthSound: {
//         artist: `Jingle Punks`,
//         name: `In the Land of Rhinoplasty`,
//         image: `https://i.vimeocdn.com/portrait/992615_300x300`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
//         genre: `Rock`
//       }
//     }
//   },
//   'level-4': {
//     question: `Выберите Jazz треки`,
//     correctGenre: `Jazz`,
//     answers: {
//       firstSound: {
//         artist: `Riot`,
//         name: `Level Plane`,
//         image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
//         genre: `R&B`
//       },
//       secondSound: {
//         artist: `Audionautix`,
//         name: `Travel Light`,
//         image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
//         genre: `Country`
//       },
//       thirdSound: {
//         artist: `Kevin MacLeod`,
//         name: `Long Stroll`,
//         image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
//         genre: `Jazz`
//       },
//       fourthSound: {
//         artist: `Jingle Punks`,
//         name: `In the Land of Rhinoplasty`,
//         image: `https://i.vimeocdn.com/portrait/992615_300x300`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
//         genre: `Rock`
//       }
//     }
//   },
//   'level-5': {
//     question: `Выберите R&B треки`,
//     correctGenre: `R&B`,
//     answers: {
//       firstSound: {
//         artist: `Riot`,
//         name: `Level Plane`,
//         image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
//         genre: `R&B`
//       },
//       secondSound: {
//         artist: `Audionautix`,
//         name: `Travel Light`,
//         image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
//         genre: `Country`
//       },
//       thirdSound: {
//         artist: `Kevin MacLeod`,
//         name: `Long Stroll`,
//         image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
//         genre: `Jazz`
//       },
//       fourthSound: {
//         artist: `Jingle Punks`,
//         name: `In the Land of Rhinoplasty`,
//         image: `https://i.vimeocdn.com/portrait/992615_300x300`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
//         genre: `Rock`
//       }
//     }
//   },
//   'level-6': {
//     question: `Выберите Country треки`,
//     correctGenre: `Country`,
//     answers: {
//       firstSound: {
//         artist: `Riot`,
//         name: `Level Plane`,
//         image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
//         genre: `R&B`
//       },
//       secondSound: {
//         artist: `Audionautix`,
//         name: `Travel Light`,
//         image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
//         genre: `Country`
//       },
//       thirdSound: {
//         artist: `Kevin MacLeod`,
//         name: `Long Stroll`,
//         image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
//         genre: `Jazz`
//       },
//       fourthSound: {
//         artist: `Jingle Punks`,
//         name: `In the Land of Rhinoplasty`,
//         image: `https://i.vimeocdn.com/portrait/992615_300x300`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
//         genre: `Rock`
//       }
//     }
//   },
//   'level-7': {
//     question: `Выберите Jazz треки`,
//     correctGenre: `Jazz`,
//     answers: {
//       firstSound: {
//         artist: `Riot`,
//         name: `Level Plane`,
//         image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
//         genre: `R&B`
//       },
//       secondSound: {
//         artist: `Audionautix`,
//         name: `Travel Light`,
//         image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
//         genre: `Country`
//       },
//       thirdSound: {
//         artist: `Kevin MacLeod`,
//         name: `Long Stroll`,
//         image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
//         genre: `Jazz`
//       },
//       fourthSound: {
//         artist: `Jingle Punks`,
//         name: `In the Land of Rhinoplasty`,
//         image: `https://i.vimeocdn.com/portrait/992615_300x300`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
//         genre: `Rock`
//       }
//     }
//   },
//   'level-8': {
//     question: `Выберите Rock треки`,
//     correctGenre: `Rock`,
//     answers: {
//       firstSound: {
//         artist: `Riot`,
//         name: `Level Plane`,
//         image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
//         genre: `R&B`
//       },
//       secondSound: {
//         artist: `Audionautix`,
//         name: `Travel Light`,
//         image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
//         genre: `Country`
//       },
//       thirdSound: {
//         artist: `Kevin MacLeod`,
//         name: `Long Stroll`,
//         image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
//         genre: `Jazz`
//       },
//       fourthSound: {
//         artist: `Jingle Punks`,
//         name: `In the Land of Rhinoplasty`,
//         image: `https://i.vimeocdn.com/portrait/992615_300x300`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
//         genre: `Rock`
//       }
//     }
//   },
//   'level-9': {
//     question: `Выберите Country треки`,
//     correctGenre: `Country`,
//     answers: {
//       firstSound: {
//         artist: `Riot`,
//         name: `Level Plane`,
//         image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
//         genre: `R&B`
//       },
//       secondSound: {
//         artist: `Audionautix`,
//         name: `Travel Light`,
//         image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
//         genre: `Country`
//       },
//       thirdSound: {
//         artist: `Kevin MacLeod`,
//         name: `Long Stroll`,
//         image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
//         genre: `Jazz`
//       },
//       fourthSound: {
//         artist: `Jingle Punks`,
//         name: `In the Land of Rhinoplasty`,
//         image: `https://i.vimeocdn.com/portrait/992615_300x300`,
//         src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
//         genre: `Rock`
//       }
//     }
//   }
// };
