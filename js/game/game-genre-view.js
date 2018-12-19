import AbstractView from "../abstract-view";

export default class GameGenreView extends AbstractView {
  constructor(roundData) {
    super();
    this.roundData = roundData;
  }

  get template() {
    return `<section class="game__screen">
    <h2 class="game__title">${this.roundData.question}</h2>
    <form class="game__tracks">
      ${this._createAnswersPartialView(this.roundData.answers)}
      <button class="game__submit button" type="submit">Ответить</button>
    </form>
  </section>`;
  }

  _createAnswersPartialView(answers) {
    return answers.map((answer, index) => {
      return `
      <div class="track">
        <button class="track__button track__button--play" type="button" data-src=${answer.src}></button>
        <div class="track__status">
          <audio>
          </audio>
        </div>
        <div class="game__answer">
          <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-${index + 1}" id="answer-${index + 1}">
          <label class="game__check" for="answer-${index + 1}" data-genre=${answer.genre}>Отметить</label>
        </div>
      </div>
      `.trim();
    }).join(``);
  }

  bind() {
    const answersCheckboxs = [...this.element.querySelectorAll(`.game__input`)];
    const answerButton = this.element.querySelector(`.game__submit`);
    answerButton.disabled = true;

    this.element.addEventListener(`change`, (evt) => {
      if (evt.target.getAttribute(`name`) === `answer`) {
        answerButton.disabled = !answersCheckboxs.some((answer) => {
          return answer.checked;
        });
      }
    });

    answerButton.addEventListener(`click`, (evt) => {
      this.onAnswer(answersCheckboxs);

      evt.preventDefault();
    });
  }

  onAnswer() {
  }

}
