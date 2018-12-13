import ResultView from "./result-view";
import Router from "../router";

export default class ResultPresenter {
  constructor(model) {
    this.model = model;

    this.view = new ResultView(model);

    this.view.onWelcome = () => {
      Router.showWelcome();
    };

    return this.view.element;
  }
}
