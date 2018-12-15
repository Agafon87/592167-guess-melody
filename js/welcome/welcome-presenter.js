import WelcomeView from "./welcome-view";
import changeScreenView from "../change-screen";
import Router from "../router";


class WelcomePresenter {
  init() {
    this.view = new WelcomeView();
    changeScreenView(this.view);

    this.view.onGameStart = () => {
      Router.showGame();
    };
  }
}

export default new WelcomePresenter();
