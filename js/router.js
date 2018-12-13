import welcomePresenter from "./welcome/welcome-presenter";
import GamePresenter from "./game/game-presenter";
import musicData from "./data/musicData";
import getAudioUrls from "./get-audio-urls";
import audioPreloader from "./audio-preloader";

const ControllerId = {
  WELCOME: ``,
  GAME: `game`,
  RESULT: `result`,
  LOOSE: `loose`,
};

export default class Router {

  static init() {
    const questions = musicData;
    Router.routes = {
      [ControllerId.WELCOME]: welcomePresenter,
      [ControllerId.GAME]: new GamePresenter(musicData),
      [ControllerId.LOOSE]: FailPresenter,
      // [ControllerId.RESULT]: resultScreen,
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
    Router.routes[ControllerId.LOOSE].init(data);
  }
}
