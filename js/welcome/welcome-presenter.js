import WelcomeView from "./welcome-view";
import Router from "../router";


export default class WelcomePresenter {
  constructor() {
    this.view = new WelcomeView();

    this.view.onAnswer = () => {
      Router.showGame();
    };

    return this.view.element;
  }

}
