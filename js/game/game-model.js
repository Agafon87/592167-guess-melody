import DefaultValueGame from "../data/default-value-game";

const PointsForAnswer = {
  FAST: 2,
  SLOW: 1,
  WRONG: -2
};

export default class GameModel {
  constructor(questions) {
    this.questions = questions;
  }

  get roundData() {
    return this.questions[this.state.currentRound];
  }

  get isMistakesLeft() {
    return this.state.mistakes >= DefaultValueGame.MAX_MISTAKES;
  }

  get isTimeLeft() {
    return this.state.time === 0;
  }

  get dashoffset() {
    return DefaultValueGame.START_TIMER_DASHOFFSET / DefaultValueGame.START_TIME * (DefaultValueGame.START_TIME - this.state.time);
  }

  get isRoundsLeft() {
    return this.state.answers.length >= DefaultValueGame.ANSWERS_COUNT;
  }

  init(state) {
    this.state = state;
  }

  update(data) {
    this.state = Object.assign({}, this.state, data);
    return this.state;
  }

  nextRound() {
    this.update({currentRound: this.state.currentRound + 1});
  }

  tick() {
    this.update({
      time: this.state.time - 1,
      currentRoundTime: this.state.currentRoundTime + 1
    });
  }

  encodeAnswer(answer) {
    if (answer.isCorrect) {
      return (answer.isFast ? PointsForAnswer.FAST : PointsForAnswer.SLOW);
    }
    return PointsForAnswer.WRONG;
  }

  answerFromGenre(answer) {
    for (let it of answer) {
      if (it.checked && (this.questions[this.state.currentRound].answers[answer.indexOf(it)].genre !== this.questions[this.state.currentRound].genre)) {
        return false;
      }
    }
    return true;
  }

  onAnswer(answer) {
    const isCorrect = (answer instanceof Array) ? this.answerFromGenre(answer) : answer;
    const isFast = this.state.currentRoundTime <= DefaultValueGame.FAST_ANSWER_MAX_TIME;
    this.update({
      answers: this.state.answers.concat([
        this.encodeAnswer({isCorrect, isFast})
      ]),
      currentRoundTime: 0,
      mistakes: this.state.mistakes + (isCorrect ? 0 : 1)
    });
  }
}
