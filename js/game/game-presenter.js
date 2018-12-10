import GameView from "./game-view";
import Router from "../router";
import {INITIAL_GAME} from "../data/data";
import GameModel from "./game-model";
import Timer from "../timer";


export default class GamePresenter {
  constructor() {
    this.model = new GameModel(Object.assign({}, INITIAL_GAME));
    this.model.data.answers.splice(0, this.model.data.answers.length);
    this.view = new GameView(this.model);
    this.timer = new Timer(this.model);


    this.view.onWelcome = () => {
      Router.showWelcome();
    };

    this.view.startTimer = () => {
      this.timer.onStartTimerForRound();
    };

    this.model.onResult = () => {
      Router.showResults(this.model);
    };

    this.model.onFailTries = () => {
      Router.showFailTriesScreen();
    };


    this.view.onAnswer = (answer, game) => {
      this.model.changeModel(answer, game);
      this.view.changeMistake(this.model);
      this.view.changeGameScreen(this.model);
    };
    return this.view.element;
  }
}
