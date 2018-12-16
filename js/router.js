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
import Loader from "./loader";

const ControllerId = {
  WELCOME: ``,
  GAME: `game`,
  STAT: `result`,
  FAIL: `fail`,
};


export default class Router {

  static start() {
    changeScreenView(capView);
    Loader.loadData();
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
    changeScreenView(capView);
    Loader.saveResults(gameStat).
      then(() => Loader.loadResults()).
      then((allStat) => Router.routes[ControllerId.STAT].init(gameStat, allStat));
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
