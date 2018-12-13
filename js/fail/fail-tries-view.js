import AbstractView from "../abstract-view";
import {getFragmentFromString, renderScreen} from "../util";


export default class FailTriesView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return {
      tagName: `section`, classNameElement: `result`, screenLine: `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
      <h2 class="result__title">Какая жалость!</h2>
      <p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
      <button class="result__replay" type="button">Попробовать ещё раз</button>`
    };
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
    this.failTriesScreenFragment = getFragmentFromString(this.template);
    renderScreen(this.failTriesScreenFragment);
  }

  bind() {
    this.resultReplay = document.querySelector(`.result__replay`);
    this.resultReplay.addEventListener(`click`, () => {
      this.onGoHome();
    });
  }

  onGoHome() {
  }
}
