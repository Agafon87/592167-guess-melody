import welcomePresenter from "./welcome/welcome-presenter";
import GamePresenter from "./game/game-presenter";
import musicData from "./data/musicData";
// import getAudioUrls from "./get-audio-urls";
// import audioPreloader from "./audio-preloader";
import failView from "./fail/fail-view";
import statView from "./result/stat-view";
// import Loader from "./loader";

const ControllerId = {
  WELCOME: ``,
  GAME: `game`,
  STAT: `result`,
  FAIL: `fail`,
};

export default class Router {

  static start() {
    // window.fetch(`https://es.dump.academy/guess-melody/questions`).
    //   then((response) => response.json()).
    //   then((data) => Router.init(data));
    Router.init(musicData);
  }

  static init(questions) {
    Router.routes = {
      [ControllerId.WELCOME]: welcomePresenter,
      [ControllerId.GAME]: new GamePresenter(questions),
      [ControllerId.FAIL]: failView,
      [ControllerId.STAT]: statView,
    };

    // const audios = getAudioUrls(questions);
    // audioPreloader.preloadAudios(audios);
    Router.showWelcome();
  }

  static showWelcome() {
    Router.routes[ControllerId.WELCOME].init();
  }

  static showGame() {
    Router.routes[ControllerId.GAME].init();
  }

  static showFail(data) {
    Router.routes[ControllerId.FAIL].init(data);
  }

  static showStat(gameStat) {
    const allStat = [5, 3, 7, 10, 4, 13, 20, 17];
    Router.routes[ControllerId.STAT].init(gameStat, allStat);
  }
}
