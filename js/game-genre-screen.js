import {getFragmentFromString, renderScreen} from './util.js';
import {getWelcomeScreen} from './welcome-screen.js';
import {getGameArtistScreen} from './game-artist-screen.js';


const tagName = `section`;
const classNameElement = `game game--genre`;
const screen = `<header class="game__header">
<a class="game__back" href="#">
  <span class="visually-hidden">Сыграть ещё раз</span>
  <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию">
</a>

<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
  <circle class="timer__line" cx="390" cy="390" r="370"
          style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"/>
</svg>

<div class="timer__value" xmlns="http://www.w3.org/1999/xhtml">
  <span class="timer__mins">05</span>
  <span class="timer__dots">:</span>
  <span class="timer__secs">00</span>
</div>

<div class="game__mistakes">
  <div class="wrong"></div>
  <div class="wrong"></div>
  <div class="wrong"></div>
</div>
</header>

<section class="game__screen">
<h2 class="game__title">Выберите инди-рок треки</h2>
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
</form>
</section>`;


// Функция возвращающая экран выбора жанра композиции
const getGameGenreScreen = () => {
  const gameGenreScreenFragment = getFragmentFromString(screen, tagName, classNameElement);
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
