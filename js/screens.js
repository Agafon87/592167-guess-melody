const Screens = {
  // this in comment
  'welcomeScreen': {tagName: `section`, classNameElement: `welcome`, screenLine: `<div class="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <button class="welcome__button"><span class="visually-hidden">Начать игру</span></button>
  <h2 class="welcome__rules-title">Правила игры</h2>
  <p class="welcome__text">Правила просты:</p>
  <ul class="welcome__rules-list">
    <li>За 5 минут нужно ответить на все вопросы.</li>
    <li>Можно допустить 3 ошибки.</li>
  </ul>
  <p class="welcome__text">Удачи!</p>`},

  // this is comment
  'gameGenreScreen': {tagName: `section`, classNameElement: `game game--genre`, screenLine: `<header class="game__header">
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
  </section>`},


  // this is comment
  'gameArtistScreen': {tagName: `section`, classNameElement: `game game--artist`, screenLine: `<header class="game__header">
  <a class="game__back" href="#">
    <span class="visually-hidden">Сыграть ещё раз</span>
    <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию">
  </a>

  <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
    <circle class="timer__line" cx="390" cy="390" r="370" style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center" />
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
  <h2 class="game__title">Кто исполняет эту песню?</h2>
  <div class="game__track">
    <button class="track__button track__button--play" type="button"></button>
    <audio></audio>
  </div>

  <form class="game__artist">
    <div class="artist">
      <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-1" id="answer-1">
      <label class="artist__name" for="answer-1">
        <img class="artist__picture" src="http://placehold.it/134x134" alt="Пелагея">
        Пелагея
      </label>
    </div>

    <div class="artist">
      <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-2" id="answer-2">
      <label class="artist__name" for="answer-2">
        <img class="artist__picture" src="http://placehold.it/134x134" alt="Пелагея">
        Краснознаменная дивизия имени моей бабушки
      </label>
    </div>

    <div class="artist">
      <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-3" id="answer-3">
      <label class="artist__name" for="answer-3">
        <img class="artist__picture" src="http://placehold.it/134x134" alt="Пелагея">
        Lorde
      </label>
    </div>
  </form>
  </section>`},


  // this in comment
  'resultSuccessScreen': {tagName: `section`, classNameElement: `result`, screenLine: `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <h2 class="result__title">Вы настоящий меломан!</h2>
  <p class="result__total">За 3 минуты и 25 секунд вы набрали 12 баллов (8 быстрых), совершив 3 ошибки</p>
  <p class="result__text">Вы заняли 2 место из 10. Это лучше чем у 80% игроков</p>
  <button class="result__replay" type="button">Сыграть ещё раз</button>`},


  // this in comment
  'failTimeScreen': {tagName: `section`, classNameElement: `result`, screenLine: `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <h2 class="result__title">Увы и ах!</h2>
  <p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
  <button class="result__replay" type="button">Попробовать ещё раз</button>`},


  // this in comment
  'failTriesScreen': {tagName: `section`, classNameElement: `result`, screenLine: `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <h2 class="result__title">Какая жалость!</h2>
  <p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
  <button class="result__replay" type="button">Попробовать ещё раз</button>`},


  // this in comment
  'modalConfirm': {tagName: `section`, classNameElement: `modal`, screenLine: `<button class="modal__close" type="button"><span class="visually-hidden">Закрыть</span></button>
  <h2 class="modal__title">Подтверждение</h2>
  <p class="modal__text">Вы уверены что хотите начать игру заново?</p>
  <div class="modal__buttons">
    <button class="modal__button button">Ок</button>
    <button class="modal__button button">Отмена</button>
  </div>`},


  // this in comment
  'modalError': {tagName: `section`, classNameElement: `modal`, screenLine: `<h2 class="modal__title">Произошла ошибка!</h2>
  <p class="modal__text">Статус: 404. Пожалуйста, перезагрузите страницу.</p>`}
};

export {Screens};
