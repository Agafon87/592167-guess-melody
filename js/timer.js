import {getFailTimeScreen} from './view/fail-time-screen.js';

const startSec = 60;
let stepOffset = 7.75;
let currentSec = 0;
let counterRound = null;


const renderTimer = (game) => {
  const timerSecs = document.querySelector(`.timer__secs`);
  const timerMins = document.querySelector(`.timer__mins`);
  --game.timeSec;
  if (game.timeSec < 0) {
    if (game.timeMin === 0) {
      getFailTimeScreen();
      return;
    }
    game.timeSec = startSec - 1;
    game.timeMin = game.timeMin - 1;
    timerMins.textContent = `0${game.timeMin}`;
  }
  timerSecs.textContent = (game.timeSec < 10) ? `0${game.timeSec}` : `${game.timeSec}`;
  changeTimer(game);
};


const renderCircleTimer = (game) => {
  const timerLine = document.querySelector(`.timer__line`);
  timerLine.setAttribute(`stroke-dashoffset`, game.offsetValue);
  game.offsetValue += stepOffset;
};


export const changeTimer = (game) => {
  setTimeout(() => {
    renderTimer(game);
    renderCircleTimer(game);
  }, 1000);
};

const counterSecond = () => {
  currentSec = currentSec + 1;
};


export default class Timer {
  constructor(model) {
    this.model = model;
  }


  onStartTimerForGame() {
  }

  onStartTimerForRound() {
    const timerSecs = document.querySelector(`.timer__secs`);
    currentSec = 0;
    counterRound = setTimeout(counterSecond, 1000);
    timerSecs.textContent = currentSec;
  }

  onStopTimerForRound() {
    clearTimeout(counterRound);
  }
}
