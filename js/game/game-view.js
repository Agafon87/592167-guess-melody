import AbstractView from '../abstract-view.js';
import {getFragmentFromString, renderScreen, renderGameScreen} from '../util.js';
import {header} from '../view/header.js';
import musicData from '../data/musicData.js';

export default class GameView extends AbstractView {
  constructor(model) {
    super();
    this.model = model.data;
  }

  get template() {
    return {
      tagName: `section`,
      classNameElement: `game game--genre`,
      screenLine: `<section class="game__screen"></section>`
    };
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    renderGameScreen(this.model, musicData);
    this.bind(this.model);
    return this._element;
  }

  changeMistake(model) {
    const gameMistakes = document.querySelector(`.game__mistakes`);
    gameMistakes.innerHTML = ``;
    for (let i = 0; i < model.data.mistakes; i++) {
      const mistake = getFragmentFromString({tagName: `div`, classNameElement: `wrong`, screenLine: ``});
      gameMistakes.appendChild(mistake);
    }
  }

  render() {
    const gameGenreScreenFragment = getFragmentFromString(this.template);
    const headerFragment = getFragmentFromString(header);
    gameGenreScreenFragment.firstChild.insertBefore(headerFragment, gameGenreScreenFragment.firstChild.firstChild);
    renderScreen(gameGenreScreenFragment);
  }

  bind(game) {
    const gameLogo = document.querySelector(`.game__logo`);

    // Обработчик события клика по иконке
    gameLogo.addEventListener(`click`, () => {
      this.onWelcome();
    });

    if (musicData[game.level].type === `genre`) {
      this.gameSubmit = document.querySelector(`.game__submit`);
      this.answerCheckbox = Array.from(document.querySelectorAll(`input[name="answer"]`));


      const answer = {
        type: musicData[game.level].type,
        currentGenre: document.querySelector(`.game__title`).dataset.genre,
        answers: this.answerCheckbox
      };


      // Обработчик события нажатия кнопки отправить
      this.gameSubmit.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this.onAnswer(answer, game);
      });
    } else {
      const answerRadio = document.querySelectorAll(`input[type="radio"]`);

      const answer = {
        type: musicData[game.level].type
      };

      for (let it of answerRadio) {
        it.addEventListener(`click`, () => {
          answer.iscorrect = it.dataset.iscorrect;
          this.onAnswer(answer, game);
        });
      }
    }
  }

  changeGameScreen(game) {
    renderGameScreen(game.data, musicData);
    this.bind(game.data);
  }

  onAnswer() {
  }

  onWelcome() {
  }

  startTimer() {
  }
}
