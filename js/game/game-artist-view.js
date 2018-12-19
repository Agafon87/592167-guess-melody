import AbstractView from "../abstract-view";


export default class GameArtistView extends AbstractView {
  constructor(roundData) {
    super();
    this.roundData = roundData;
  }

  get template() {
    return `
    <section class="game__screen">
      <h2 class="game__title">Кто исполняет эту песню?</h2>
      <div class="game__track">
        <button class="track__button track__button--play" type="button"  data-src=${this.roundData.src}></button>
        <audio></audio>
      </div>

      <form class="game__artist">
      ${this._createAnswersPartialView(this.roundData.answers)}
      </form>
    </section>
  </section>
    `;
  }

  _createAnswersPartialView(answers) {
    return answers.map((answer, index) => {
      return `
      <div class="artist">
          <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-${index + 1}" id="answer-${index + 1}">
          <label class="artist__name" for="answer-${index + 1}">
            <img class="artist__picture" src="${answer.image.url}" alt="${answer.title}" data-correct=${answer.isCorrect}>
            ${answer.title}
          </label>
        </div>
      `.trim();
    }).join(``);
  }


  bind() {
    const answersButtons = [...this.element.querySelectorAll(`.artist__input`)];
    this.element.addEventListener(`click`, (evt) => {
      if (evt.target.classList.contains(`artist__input`)) {
        const answerIndex = answersButtons.indexOf(evt.target);
        this.onAnswer(this.roundData.answers[answerIndex].isCorrect);
      }
    });
  }

  onAnswer() {
  }
}
