const testAnswers = (answer) => {
  let mistake = false;
  if (answer.type === `genre`) {
    for (let it of answer.answers) {
      if (it.checked && (it.dataset.genre !== answer.currentGenre)) {
        mistake = true;
        return mistake;
      }
    }
  } else if (answer.type === `artist`) {
    if (answer.iscorrect === `false`) {
      mistake = true;
    }
  }

  return mistake;
};

export default class GameModel {
  constructor(data) {
    this.data = data;
  }


  changeModel(answer, newData) {
    const currentAnswer = {
      time: 30
    };
    if (testAnswers(answer)) {
      newData.mistakes = newData.mistakes + 1;
      currentAnswer.correct = false;
    } else {
      currentAnswer.correct = true;
    }
    newData.answers.push(currentAnswer);
    newData.level = newData.level + 1;
    this.data = newData;

    if (this.data.mistakes >= 3) {
      this.onFailTries();
    }

    if (this.data.level >= 10) {
      this.onResult();
    }
  }


  onFailTries() {
  }

  onResult() {
  }
}
