import AbstractView from "../abstract-view";
import {renderElement} from "../util";

export default class GameArtistView extends AbstractView {
  constructor(round, game) {
    super();
    this.round = round;
    this.game = game;
  }

  get template() {
    return `<h2 class="game__title">${this.round.question}</h2>
    <div class="game__track">
      <button class="track__button track__button--pause" type="button"></button>
      <audio autoplay>
        <source src="${this.round.src}" type="audio/mpeg">
      </audio>
    </div>

    <form class="game__artist">
      <div class="artist">
        <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-1" id="answer-1" data-iscorrect="${this.round.answers[0].isCorrect}">
        <label class="artist__name" for="answer-1">
          <img class="artist__picture" src="${this.round.answers[0].image.url}" alt="${this.round.answers[0].title}">
          ${this.round.answers[0].title}
        </label>
      </div>

      <div class="artist">
        <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-2" id="answer-2" data-iscorrect="${this.round.answers[1].isCorrect}">
        <label class="artist__name" for="answer-2">
          <img class="artist__picture" src="${this.round.answers[1].image.url}" alt="${this.round.answers[1].title}">
          ${this.round.answers[1].title}
        </label>
      </div>

      <div class="artist">
        <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-3" id="answer-3" data-iscorrect="${this.round.answers[2].isCorrect}">
        <label class="artist__name" for="answer-3">
          <img class="artist__picture" src="${this.round.answers[2].image.url}" alt="${this.round.answers[2].title}">
          ${this.round.answers[2].title}
        </label>
      </div>
    </form>`;
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind();
    return this._element;
  }

  render() {
    const questionSection = document.querySelector(`.game__screen`);
    renderElement(questionSection, this.template);
  }

  bind() {
    this.trackButton = document.querySelector(`.track__button`);
    this.trackButton.addEventListener(`click`, () => {
      const audio = this.trackButton.nextElementSibling;
      if (this.trackButton.classList.contains(`track__button--play`)) {
        this.trackButton.classList.remove(`track__button--play`);
        this.trackButton.classList.add(`track__button--pause`);
        audio.play();
      } else {
        this.trackButton.classList.remove(`track__button--pause`);
        this.trackButton.classList.add(`track__button--play`);
        audio.pause();
      }
    });
  }
}
