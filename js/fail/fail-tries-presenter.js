import FailTriesView from "./fail-tries-view";
import Router from "../router";

export default class FailTriesPresenter {
  constructor() {
    this.view = new FailTriesView();

    this.view.onGoHome = () => {
      Router.showWelcome();
    };

    return this.view.element;
  }
}

