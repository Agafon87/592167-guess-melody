import AbstractView from "../abstract-view";
import changeScreenView from "../change-screen";
import Router from "../router";
import DefaultValueGame from "../data/default-value-game";

const getFailTimeTitle = () => {
  return `
  <h2 class="result__title">Увы и ах!</h2>
    <p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
  `.trim();
};

const getFailTriesTitle = () => {
  return `
  <h2 class="result__title">Какая жалость!</h2>
    <p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
  `.trim();
};

class FailView extends AbstractView {
  get template() {
    return `
    <section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    ${this.getTitle()}
    <button class="result__replay" type="button">Попробовать ещё раз</button>
  </section>
    `;
  }

  init(data) {
    this.data = data;
    changeScreenView(this);
  }

  getTitle() {
    return (this.data >= DefaultValueGame.MAX_MISTAKES ? getFailTriesTitle() : getFailTimeTitle());
  }

  bind() {
    this.replay = this.element.querySelector(`.result__replay`);
    this.replay.addEventListener(`click`, () => {
      this.onReplay();
    });
  }

  onReplay() {
    Router.showGame();
  }
}

export default new FailView();
