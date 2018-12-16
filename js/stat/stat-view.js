import AbstractView from "../abstract-view";
import Router from "../router";
import changeScreenView from "../change-screen";
import {getResultTotal, getResultText} from "../util";
import {INITIAL_GAME} from "../data/data";

class StatView extends AbstractView {
  get template() {
    return `
    <section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Вы настоящий меломан!</h2>
    <p class="result__total">${getResultTotal(this.gameStat)}</p>
    <p class="result__text">${getResultText(this.gameStat, this.allStat)}</p>
    <button class="result__replay" type="button">Сыграть ещё раз</button>
  </section>
    `;
  }

  init(gameStat, allStat) {
    if (this._element) {
      delete this._element;
    }
    this.gameStat = gameStat;
    this.allStat = allStat;
    changeScreenView(this);
  }


  bind() {
    this.resultReplay = this.element.querySelector(`.result__replay`);
    this.resultReplay.addEventListener(`click`, () => {
      this.onReplay();
    });
  }


  onReplay() {
    Router.showGame(INITIAL_GAME);
  }
}

export default new StatView();
