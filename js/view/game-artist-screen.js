import {renderElement} from '../util.js';
import {nextLevel} from '../game/game.js';

const questionsBlock = (roundDescription) => {
  return `<h2 class="game__title">${roundDescription.question}</h2>
  <div class="game__track">
    <button class="track__button track__button--play" type="button"></button>
    <audio>
      <source src="${roundDescription.src}" type="audio/mpeg">
    </audio>
  </div>

  <form class="game__artist">
    <div class="artist">
      <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-1" id="answer-1">
      <label class="artist__name" for="answer-1">
        <img class="artist__picture" src="${roundDescription.answers[0].image.url}" alt="${roundDescription.answers[0].title}">
        ${roundDescription.answers[0].title}
      </label>
    </div>

    <div class="artist">
      <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-2" id="answer-2">
      <label class="artist__name" for="answer-2">
        <img class="artist__picture" src="${roundDescription.answers[1].image.url}" alt="${roundDescription.answers[1].title}">
        ${roundDescription.answers[1].title}
      </label>
    </div>

    <div class="artist">
      <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-3" id="answer-3">
      <label class="artist__name" for="answer-3">
        <img class="artist__picture" src="${roundDescription.answers[2].image.url}" alt="${roundDescription.answers[2].title}">
        ${roundDescription.answers[2].title}
      </label>
    </div>
  </form>`;
};


export const renderQuestionBlockForArtist = (round, currentGame) => {
  const questionSection = document.querySelector(`.game__screen`);
  // const gameMistakes = document.querySelector(`.game__mistakes`);
  renderElement(questionSection, questionsBlock(round));

  const trackButton = document.querySelector(`.track__button`);
  trackButton.addEventListener(`click`, () => {
    const audio = trackButton.nextElementSibling;
    if (trackButton.classList.contains(`track__button--play`)) {
      trackButton.classList.remove(`track__button--play`);
      trackButton.classList.add(`track__button--pause`);
      audio.play();
    } else {
      trackButton.classList.remove(`track__button--pause`);
      trackButton.classList.add(`track__button--play`);
      audio.pause();
    }
  });

  const answerRadio = document.querySelectorAll(`input[type="radio"]`);
  for (let it of answerRadio) {
    it.addEventListener(`click`, () => {
      nextLevel(currentGame);
    });
  }
};

// const gameSubmit = document.querySelector(`.game__submit`);
// const answerCheckbox = Array.from(document.querySelectorAll(`input[name="answer"]`));
// const trackButton = Array.from(document.querySelectorAll(`.track__button`));
// let answerCheckboxChecked = false;

// Блокируем кнопку отправки, пока не будет выбран хотя бы один вариант
// gameSubmit.disabled = true;

// Обработчик события нажатия на иконку воспроизведения мелодии
// for (let it of trackButton) {
//   it.addEventListener(`click`, () => {
//     const audio = it.nextElementSibling.children[0];
//     if (it.classList.contains(`track__button--play`)) {
//       it.classList.remove(`track__button--play`);
//       it.classList.add(`track__button--pause`);
//       audio.play();
//     } else {
//       it.classList.remove(`track__button--pause`);
//       it.classList.add(`track__button--play`);
//       audio.pause();
//     }
//   });
// }

// Навешиваем обработчик выбора жанра.
// const onClickAnswerCheckbox = () => {
//   answerCheckboxChecked = false;
//   for (let it of answerCheckbox) {
//     if (it.checked) {
//       answerCheckboxChecked = true;
//       break;
//     }
//   }

//   if (gameSubmit.disabled === true && answerCheckboxChecked === true) {
//     gameSubmit.disabled = false;
//   } else if (gameSubmit.disabled === false && answerCheckboxChecked === true) {
//     gameSubmit.disabled = false;
//   } else {
//     gameSubmit.disabled = true;
//   }
// };

// for (let it of answerCheckbox) {
//   it.addEventListener(`change`, onClickAnswerCheckbox);
// }

// Обработчик события нажатия кнопки отправить
// gameSubmit.addEventListener(`click`, (evt) => {
//   evt.preventDefault();
//   if (answerCheckbox[0].checked) {
//     const mistake = getFragmentFromString({tagName: `div`, classNameElement: `wrong`, screenLine: ``});
//     gameMistakes.appendChild(mistake);
//   }
//   nextLevel(currentGame);
// });


// const getGameArtistScreen = () => {
//   const gameArtistScreenFragment = getFragmentFromString(Screens.gameArtistScreen);
//   renderScreen(gameArtistScreenFragment);

//   const gameLogo = document.querySelector(`.game__logo`);
//   const answerRadio = document.querySelectorAll(`input[type="radio"]`);

//   for (let it of answerRadio) {
//     it.addEventListener(`click`, () => {
//       const number = getRandomNumber();
//       switch (number) {
//         case 0:
//           getResultSuccessScreen();
//           break;
//         case 1:
//           getFailTimeScreen();
//           break;
//         case 2:
//           getFailTriesScreen();
//           break;
//       }
//     });
//   }

//   gameLogo.addEventListener(`click`, () => {
//     getWelcomeScreen();
//   });
// };

// export {getGameArtistScreen};
