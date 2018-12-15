import GameModel from "./game-model";
import {INITIAL_GAME} from "../data/data";
import GameView from "./game-view";
import changeScreenView from "../change-screen";
import Router from "../router";
import DefaultValueGame from "../data/default-value-game";

export default class GamePresenter {
  constructor(questions) {
    this.model = new GameModel(questions);
  }

  init() {
    this.model.update(INITIAL_GAME);
    this.view = new GameView(this.model);
    this.view.onWelcome = () => {
      clearTimeout(this._intervalId);
      Router.showWelcome();
    };
    this.view.onAnswer = this.onAnswer.bind(this);
    changeScreenView(this.view);
    this._intervalId = setInterval(() => {
      this.tick();
    }, 1000);
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

  onAnswer(answer) {
    // Тут код для остановки аудио

    this.model.onAnswer(answer);
    if (this.model.isTimeLeft || this.model.isMistakesLeft || this.model.isRoundsLeft) {
      this.gameOver();
    } else {
      this.model.nextRound();
      this.view.updateRound();
    }
  }
}
