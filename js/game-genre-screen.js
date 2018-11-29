import {getFragmentFromString, renderScreen, renderElement} from './util.js';
import {getWelcomeScreen} from './welcome-screen.js';
import {getResultSuccessScreen} from './result-success-screen.js';
import {INITIAL_GAME} from './data/game.js';
import {header} from './header.js';
import {questionList} from './data/game.js';
import {getFailTriesScreen} from './fail-tries-screen.js';


const questionsBlock = (levelDescription) => {
  return `<h2 class="game__title">${levelDescription.question}</h2>
  <form class="game__tracks">
    <div class="track">
      <button class="track__button track__button--play" type="button"></button>
      <div class="track__status">
        <audio></audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-1">
        <label class="game__check" for="answer-1">Отметить</label>
      </div>
    </div>

    <div class="track">
      <button class="track__button track__button--play" type="button"></button>
      <div class="track__status">
        <audio></audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-2">
        <label class="game__check" for="answer-2">Отметить</label>
      </div>
    </div>

    <div class="track">
      <button class="track__button track__button--pause" type="button"></button>
      <div class="track__status">
        <audio></audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-3">
        <label class="game__check" for="answer-3">Отметить</label>
      </div>
    </div>

    <div class="track">
      <button class="track__button track__button--play" type="button"></button>
      <div class="track__status">
        <audio></audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-4">
        <label class="game__check" for="answer-4">Отметить</label>
      </div>
    </div>

    <button class="game__submit button" type="submit">Ответить</button>
  </form>`;
};


const renderQuestionBlock = (newGame) => {
  const questionSection = document.querySelector(`.game__screen`);
  const gameMistakes = document.querySelector(`.game__mistakes`);
  renderElement(questionSection, questionsBlock(questionList[`level-${newGame.level}`]));

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

  // Обработчик события нажатия кнопки отправить
  gameSubmit.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    if (answerCheckbox[0].checked) {
      const mistake = getFragmentFromString({tagName: `div`, classNameElement: `wrong`, screenLine: ``});
      gameMistakes.appendChild(mistake);
      newGame.lives = newGame.lives - 1;
      if (newGame.lives === 0) {
        setTimeout(() => {
          getFailTriesScreen();
        }, 500);
        return;
      }
    }

    newGame.level = newGame.level + 1;
    if (newGame.level < 10) {
      renderQuestionBlock(newGame);
    } else {
      getResultSuccessScreen();
    }
  });
};


// Функция возвращающая экран выбора жанра композиции
const getGameGenreScreen = () => {
  const newGame = Object.assign({}, INITIAL_GAME);
  const gameGenreScreen = {tagName: `section`, classNameElement: `game game--genre`, screenLine: `<section class="game__screen"></section>`};
  const gameGenreScreenFragment = getFragmentFromString(gameGenreScreen);
  const headerFragment = getFragmentFromString(header);
  gameGenreScreenFragment.firstChild.insertBefore(headerFragment, gameGenreScreenFragment.firstChild.firstChild);
  renderScreen(gameGenreScreenFragment);
  renderQuestionBlock(newGame);

  const gameLogo = document.querySelector(`.game__logo`);

  // Обработчик события клика по иконке
  gameLogo.addEventListener(`click`, () => {
    getWelcomeScreen();
  });


};


export {getGameGenreScreen};
