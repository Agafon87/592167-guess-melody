import WelcomeView from "./welcome-view";
import changeScreenView from "../change-screen";
import Router from "../router";
import {INITIAL_GAME} from "../data/data";


class WelcomePresenter {
  init() {
    this.view = new WelcomeView();
    changeScreenView(this.view);

    this.view.onGameStart = () => {
      Router.showGame(INITIAL_GAME);
    };
  }
}

export default new WelcomePresenter();
