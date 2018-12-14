import welcomePresenter from "./welcome/welcome-presenter";
import GamePresenter from "./game/game-presenter";
import musicData from "./data/musicData";
import getAudioUrls from "./get-audio-urls";
import audioPreloader from "./audio-preloader";
import failView from "./fail/fail-view";
import statView from "./result/stat-view";
import Loader from "./loader";

const ControllerId = {
  WELCOME: ``,
  GAME: `game`,
  STAT: `result`,
  FAIL: `fail`,
};

export default class Router {

  static init() {
    // const questions = Loader.loadData();
    const data = fetch(`https://es.dump.academy/guess-melody/questions`);
    data.
    then((response) => response.json()).
    then((dan) => console.log(dan));

    const questions = musicData;
    console.log(questions);
    Router.routes = {
      [ControllerId.WELCOME]: welcomePresenter,
      [ControllerId.GAME]: new GamePresenter(musicData),
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
