import WelcomePresenter from "./welcome/welcome-presenter";
import GamePresenter from "./game/game-presenter";
import FailTriesPresenter from "./fail/fail-tries-presenter";
import ResultPresenter from "./result/result-presenter";

export default class Router {

  static showWelcome() {
    return new WelcomePresenter();
  }

  static showGame() {
    return new GamePresenter();
  }

  static showFailTriesScreen() {
    return new FailTriesPresenter();
  }

  static showResults(model) {
    return new ResultPresenter(model);
  }
}
