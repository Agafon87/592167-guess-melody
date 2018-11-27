import {getFragmentFromString, renderScreen} from './util.js';
import {getWelcomeScreen} from './welcome-screen.js';
import {getGameArtistScreen} from './game-artist-screen.js';
import {Screens} from './screens.js';


// Функция возвращающая экран выбора жанра композиции
const getGameGenreScreen = () => {
  const gameGenreScreenFragment = getFragmentFromString(Screens.gameGenreScreen);
  renderScreen(gameGenreScreenFragment);

  const gameLogo = document.querySelector(`.game__logo`);
  const gameSubmit = document.querySelector(`.game__submit`);
  const answerCheckbox = Array.from(document.querySelectorAll(`input[name="answer"]`));
  let answerCheckboxChecked = false;

  // Блокируем кнопку отправки, пока не будет выбран хотя бы один вариант
  gameSubmit.disabled = true;

  // Навешиваем обработчик выбора жанра.
  const onClickAnswerCheckbox = () => {
    answerCheckboxChecked = false;
    for (let it of answerCheckbox) {
      if (it.checked) {
        answerCheckboxChecked = true;
        break;
      }
    }

    if (gameSubmit.disabled === true && answerCheckboxChecked === true) {
      gameSubmit.disabled = false;
    } else if (gameSubmit.disabled === false && answerCheckboxChecked === true) {
      gameSubmit.disabled = false;
    } else {
      gameSubmit.disabled = true;
    }
  };

  for (let it of answerCheckbox) {
    it.addEventListener(`change`, onClickAnswerCheckbox);
  }

  gameLogo.addEventListener(`click`, () => {
    getWelcomeScreen();
  });

  gameSubmit.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    getGameArtistScreen();
  });

};


export {getGameGenreScreen};
