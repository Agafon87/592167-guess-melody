import AbstractView from '../abstract-view.js';
import {getFragmentFromString, renderScreen} from '../util.js';

export default class WelcomeView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return {
      tagName: `section`, classNameElement: `welcome`, screenLine: `<div class="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <button class="welcome__button"><span class="visually-hidden">Начать игру</span></button>
    <h2 class="welcome__rules-title">Правила игры</h2>
    <p class="welcome__text">Правила просты:</p>
    <ul class="welcome__rules-list">
      <li>За 5 минут нужно ответить на все вопросы.</li>
      <li>Можно допустить 3 ошибки.</li>
    </ul>
    <p class="welcome__text">Удачи!</p>`
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
    const welcomeScreenFragment = getFragmentFromString(this.template);
    renderScreen(welcomeScreenFragment);
  }


  bind() {
    const welcomeButton = document.querySelector(`.welcome__button`);
    welcomeButton.addEventListener(`click`, () => {
      this.onAnswer();
    });
  }

  onAnswer() {
  }
}
