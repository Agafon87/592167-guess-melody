import AbstractView from "../abstract-view";
import {renderElement} from "../util";

export default class GameGenreView extends AbstractView {
  constructor(round, game) {
    super();
    this.round = round;
    this.game = game;
  }

  get template() {
    return `<h2 class="game__title" data-genre="${this.round.genre}">${this.round.question}</h2>
  <form class="game__tracks">
    <div class="track">
      <button class="track__button track__button--pause" type="button"></button>
      <div class="track__status">
        <audio autoplay>
          <source src="${this.round.answers[0].src}" type="audio/mpeg">
        </audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-1" data-genre="${this.round.answers[0].genre}">
        <label class="game__check" for="answer-1">Отметить</label>
      </div>
    </div>

    <div class="track">
      <button class="track__button track__button--play" type="button"></button>
      <div class="track__status">
        <audio>
          <source src="${this.round.answers[1].src}" type="audio/mpeg">
        </audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-2" data-genre="${this.round.answers[1].genre}">
        <label class="game__check" for="answer-2">Отметить</label>
      </div>
    </div>

    <div class="track">
    <button class="track__button track__button--play" type="button"></button>
      <div class="track__status">
        <audio>
        <source src="${this.round.answers[2].src}" type="audio/mpeg">
        </audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-3" data-genre="${this.round.answers[2].genre}">
        <label class="game__check" for="answer-3">Отметить</label>
      </div>
    </div>

    <div class="track">
      <button class="track__button track__button--play" type="button"></button>
      <div class="track__status">
        <audio>
        <source src="${this.round.answers[3].src}" type="audio/mpeg">
        </audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-4" data-genre="${this.round.answers[3].genre}">
        <label class="game__check" for="answer-4">Отметить</label>
      </div>
    </div>

    <button class="game__submit button" type="submit">Ответить</button>
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
    this.gameMistakes = document.querySelector(`.game__mistakes`);
    this.gameSubmit = document.querySelector(`.game__submit`);
    this.answerCheckbox = Array.from(document.querySelectorAll(`input[name="answer"]`));
    this.trackButton = Array.from(document.querySelectorAll(`.track__button`));
    let answerCheckboxChecked = false;


    // Блокируем кнопку отправки, пока не будет выбран хотя бы один вариант
    this.gameSubmit.disabled = true;

    // Обработчик события нажатия на иконку воспроизведения мелодии
    for (let it of this.trackButton) {
      it.addEventListener(`click`, () => {

        const elem = this.trackButton.find((element) => {
          return element.classList.contains(`track__button--pause`);
        });
        elem.click();

        const audio = it.nextElementSibling.children[0];
        if (it.classList.contains(`track__button--play`)) {
          it.classList.remove(`track__button--play`);
          it.classList.add(`track__button--pause`);
          audio.play();
        } else {
          it.classList.remove(`track__button--pause`);
          it.classList.add(`track__button--play`);
          audio.pause();
        }
      });
    }

    // Навешиваем обработчик выбора жанра.
    const onClickAnswerCheckbox = () => {
      answerCheckboxChecked = false;
      for (let it of this.answerCheckbox) {
        if (it.checked) {
          answerCheckboxChecked = true;
          break;
        }
      }


      this.gameSubmit.disabled = (answerCheckboxChecked) ? false : true;
    };

    for (let it of this.answerCheckbox) {
      it.addEventListener(`change`, onClickAnswerCheckbox);
    }
  }

}
