import AbstractView from "../abstract-view";
import {countTime, amountMistakes, getFragmentFromString, renderScreen} from "../util";
import {getPointsScored} from "../data/data";

export default class ResultView extends AbstractView {
  constructor(model) {
    super();
    this.model = model;
  }

  get template() {
    return {
      tagName: `section`,
      classNameElement: `result`,
      screenLine: `${this.renderResultScreen(this.model)}`
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
    this.resultSuccessScreenFragment = getFragmentFromString(this.template);
    renderScreen(this.resultSuccessScreenFragment);
  }

  bind() {
    this.resultReplay = document.querySelector(`.result__replay`);
    this.resultReplay.addEventListener(`click`, () => {
      this.onWelcome();
    });
  }

  renderResultScreen(model) {
    let str = `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию"   width="186" height="83"></div>
    <h2 class="result__title">Вы настоящий меломан!</h2>
    <p class="result__total">За ${countTime(model.data.answers)} вы набрали ${getPointsScored(model.data.answers)}${amountMistakes(model.data.mistakes)}</p>
    <p class="result__text">Вы заняли 2 место из 10. Это лучше чем у 80% игроков</p>
    <button class="result__replay" type="button">Сыграть ещё раз</button>`;
    return str;
  }

  onWelcome() {
  }
}
