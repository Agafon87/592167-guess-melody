import AbstractView from "../abstract-view";
import GameGenreView from "./game-genre-view";
import GameArtistView from "./game-artist-view";
import mistakesPartialView from "../view/mistakes-partial-view";
import DefaultValueGame from "../data/default-value-game";
import audioPreloader from "../audio-preloader";

const LEVELS = {
  genre: GameGenreView,
  artist: GameArtistView
};

export default class GameView extends AbstractView {
  constructor(model) {
    super();
    this.model = model;
  }

  get template() {
    return `
    <section class="game game--${this.model.roundData.type}">
    <header class="game__header">
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

      <div class="game__mistakes"></div>
    </header>

  </section>
    `;
  }

  updateRound() {
    const RoundLevelConstructor = LEVELS[this.model.roundData.type];

    if (this._gameRound) {
      this._gameRound.element.remove();
    }

    this._gameRound = new RoundLevelConstructor(this.model.roundData);
    this._gameRound.onAnswer = (answer) => {
      this.onAnswer(answer);
    };
    this.element.appendChild(this._gameRound.element);

    this._gameMistakes.innerHTML = mistakesPartialView(this.model.state.mistakes);
  }

  visibleCorrectValue(debug) {
    const roundQuestion = this.model.questions[this.model.state.currentRound];
    if (roundQuestion.type === `genre`) {
      this.debugGenre(roundQuestion.genre, debug);
    } else if (roundQuestion.type === `artist`) {
      this.debugArtist(debug);
    }

  }

  debugGenre(genre, debug) {
    const notes = this.element.querySelectorAll(`.game__answer > label`);
    for (let it of notes) {
      if (it.dataset.genre === genre) {
        if (debug) {
          it.classList.add(`game__check__correct`);
        } else {
          it.classList.remove(`game__check__correct`);
        }
      }
    }
  }

  debugArtist(debug) {
    const artistsImg = this.element.querySelectorAll(`.artist__name > img`);
    for (let it of artistsImg) {
      if (it.dataset.correct === `true` && debug) {
        it.classList.add(`artist__picture__correct`);
      } else {
        it.classList.remove(`artist__picture__correct`);
      }
    }
  }

  updateTimer() {
    const seconds = this.model.state.time;
    this._timerMins.textContent = `0${seconds / 60 >> 0}`.slice(-2);
    this._timerSecs.textContent = `0${seconds % 60}`.slice(-2);

    this._timerLine.setAttribute(`stroke-dashoffset`, this.model.dashoffset);

    if (seconds === DefaultValueGame.START_BLINK_TIME) {
      this._timer.classList.add(`timer__value--finished`);
    }
  }

  stopActiveAudio() {
    if (this._activePlayerButton) {
      this._activePlayerButton.classList.toggle(`track__button--pause`);
      this._activeAudio.pause();
    }
  }

  // addModalConfirm() {
  //   this._modalConfirm = new ModalConfirm();
  //   this.element.appendChild(this._modalConfirm.element);
  // }

  bind() {
    this._gameMistakes = this.element.querySelector(`.game__mistakes`);
    this.gameLogo = this.element.querySelector(`.game__logo`);
    this._timer = this.element.querySelector(`.timer__value`);
    this._timerMins = this.element.querySelector(`.timer__mins`);
    this._timerSecs = this.element.querySelector(`.timer__secs`);
    this._timerLine = this.element.querySelector(`.timer__line`);
    this._timerLine.setAttribute(`stroke-dasharray`, DefaultValueGame.START_TIMER_DASHOFFSET);

    this.gameLogo.addEventListener(`click`, () => {
      this.onWelcome();
    });

    this.element.addEventListener(`click`, (event) => {
      if (event.target.classList.contains(`track__button--play`)) {
        this.stopActiveAudio();

        if (this._activePlayerButton === event.target) {
          this._activePlayerButton = null;
          this._activeAudio = null;
        } else {
          event.target.classList.toggle(`track__button--pause`);
          this._activePlayerButton = event.target;
          this._activeAudio = audioPreloader.getAudioFromSrc(event.target.dataset.src);
          const promise = this._activeAudio.play();
          // В большинстве браузеров метод play возвращает promise,
          // если до загрузки аудио вызвать метод pause то у промиса сработает reject
          // т.к. поведение приложения при этом ожидаемо то просто добавим пустой catch
          // чтобы в консоль не выводились Uncaught (in promise) DOMException
          if (promise) {
            promise.catch(() => {});
          }
        }

        event.preventDefault();
      }
    });

    this.updateTimer();
    this.updateRound(this.debug);
  }

  onAnswer() {
  }

  onWelcome() {
  }
}
