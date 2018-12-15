import welcomePresenter from "./welcome/welcome-presenter";
import GamePresenter from "./game/game-presenter";
// import musicData from "./data/musicData";
import getAudioUrls from "./get-audio-urls";
import audioPreloader from "./audio-preloader";
import failView from "./fail/fail-view";
import statView from "./stat/stat-view";
import changeScreenView from "./change-screen";
import capView from "./view/cap-view";
import ErrorModal from "./modal/modal-error";
import ModalConfirm from "./modal/modal-confirm";
// import Loader from "./loader";

const ControllerId = {
  WELCOME: ``,
  GAME: `game`,
  STAT: `result`,
  FAIL: `fail`,
};

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

export default class Router {

  static start() {
    changeScreenView(capView);
    window.fetch(`https://es.dump.academy/guess-melody/questions`).
      then(checkStatus).
      then((response) => response.json()).
      then((data) => Router.init(data)).
      catch(Router.showModalError);
  }

  static init(questions) {
    Router.routes = {
      [ControllerId.WELCOME]: welcomePresenter,
      [ControllerId.GAME]: new GamePresenter(questions),
      [ControllerId.FAIL]: failView,
      [ControllerId.STAT]: statView,
    };

    const audios = getAudioUrls(questions);
    audioPreloader.preloadAudios(audios);
    Router.showWelcome();
  }

  static showWelcome() {
    Router.routes[ControllerId.WELCOME].init();
  }

  static showGame(initialState) {
    Router.routes[ControllerId.GAME].init(initialState);
  }

  static showFail(data) {
    Router.routes[ControllerId.FAIL].init(data);
  }

  static showStat(gameStat) {
    const allStat = [5, 3, 7, 10, 4, 13, 20, 17];
    Router.routes[ControllerId.STAT].init(gameStat, allStat);
  }

  static showModalError(error) {
    const viewError = new ErrorModal(error);
    changeScreenView(viewError);
  }

  static showModalConfirm(state) {
    const viewConfirm = new ModalConfirm(state);
    changeScreenView(viewConfirm);
  }
}
