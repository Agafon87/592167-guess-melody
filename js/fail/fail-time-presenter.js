import FailTimeView from "./fail-time-view";
import Router from "../router";

export default class FailTimePresenter {
  constructor() {
    this.view = new FailTimeView();

    this.view.goHome = () => {
      Router.showWelcome();
    };

    return this.view.element;
  }
}
