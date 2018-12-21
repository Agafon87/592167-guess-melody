import GameModel from "./game-model";
import GameView from "./game-view";
import changeScreenView from "../change-screen";
import Router from "../router";
import DefaultValueGame from "../data/default-value-game";

let debug = false;
const ONE_SECOND = 1000;

export default class GamePresenter {
  constructor(questions) {
    this.model = new GameModel(questions);
  }

  init(initialState) {
    window.onhashchange = () => {
      debug = (location.hash.replace(`#`, ``) === `debug`);
      this.isDebug();
    };
    this.model.update(initialState);
    this.view = new GameView(this.model);
    this.view.onWelcome = () => {
      clearTimeout(this._intervalId);
      this.view.stopActiveAudio();
      Router.showModalConfirm(this.model.state);
    };
    this.view.onAnswer = this.onAnswer.bind(this);
    changeScreenView(this.view);
    this.isDebug();
    this._intervalId = setInterval(() => {
      this.tick();
    }, ONE_SECOND);
  }

  gameOver() {
    clearTimeout(this._intervalId);
    if (this.model.isRoundsLeft) {
      const data = {
        answers: this.model.state.answers,
        time: DefaultValueGame.START_TIME - this.model.state.time,
        mistakes: this.model.state.mistakes
      };
      Router.showStat(data);
    } else {
      Router.showFail(this.model.state.mistakes);
    }
  }

  tick() {
    this.model.tick();
    if (this.model.isTimeLeft) {
      this.gameOver();
    } else {
      this.view.updateTimer();
    }
  }

  isDebug() {
    this.view.visibleCorrectValue(debug);
  }

  onAnswer(answer) {
    this.view.stopActiveAudio();

    this.model.onAnswer(answer);
    if (this.model.isTimeLeft || this.model.isMistakesLeft || this.model.isRoundsLeft) {
      this.gameOver();
    } else {
      this.model.nextRound();
      this.view.updateRound();
      this.isDebug();
    }
  }
}
