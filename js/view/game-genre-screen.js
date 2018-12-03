import {getFragmentFromString, renderElement} from '../util.js';
import {nextLevel} from '../game/game.js';
import {statistic} from '../data/data.js';


const questionsBlock = (roundDescription) => {
  return `<h2 class="game__title">${roundDescription.question}</h2>
  <form class="game__tracks">
    <div class="track">
      <button class="track__button track__button--pause" type="button"></button>
      <div class="track__status">
        <audio autoplay>
          <source src="${roundDescription.answers[0].src}" type="audio/mpeg">
        </audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-1">
        <label class="game__check" for="answer-1">Отметить</label>
      </div>
    </div>

    <div class="track">
      <button class="track__button track__button--play" type="button"></button>
      <div class="track__status">
        <audio>
          <source src="${roundDescription.answers[1].src}" type="audio/mpeg">
        </audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-2">
        <label class="game__check" for="answer-2">Отметить</label>
      </div>
    </div>

    <div class="track">
    <button class="track__button track__button--play" type="button"></button>
      <div class="track__status">
        <audio>
        <source src="${roundDescription.answers[2].src}" type="audio/mpeg">
        </audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-3">
        <label class="game__check" for="answer-3">Отметить</label>
      </div>
    </div>

    <div class="track">
      <button class="track__button track__button--play" type="button"></button>
      <div class="track__status">
        <audio>
        <source src="${roundDescription.answers[3].src}" type="audio/mpeg">
        </audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-4">
        <label class="game__check" for="answer-4">Отметить</label>
      </div>
    </div>

    <button class="game__submit button" type="submit">Ответить</button>
  </form>`;
};


export const renderQuestionBlockForGenre = (round, currentGame) => {
  const questionSection = document.querySelector(`.game__screen`);
  const gameMistakes = document.querySelector(`.game__mistakes`);
  // renderElement(questionSection, questionsBlock(questionList[`level-${round.level}`]));
  renderElement(questionSection, questionsBlock(round));

  const gameSubmit = document.querySelector(`.game__submit`);
  const answerCheckbox = Array.from(document.querySelectorAll(`input[name="answer"]`));
  const trackButton = Array.from(document.querySelectorAll(`.track__button`));
  let answerCheckboxChecked = false;

  // Блокируем кнопку отправки, пока не будет выбран хотя бы один вариант
  gameSubmit.disabled = true;

  // Обработчик события нажатия на иконку воспроизведения мелодии
  for (let it of trackButton) {
    it.addEventListener(`click`, () => {

      const elem = trackButton.find((element) => {
        return element.classList.contains(`track__button--pause`);
      });
      elem.click();

      const audio = it.nextElementSibling.children[0];
      if (it.classList.contains(`track__button--play`)) {
        it.classList.remove(`track__button--play`);
        it.classList.add(`track__button--pause`);
        audio.play();
      } else {
        it.classList.remove(`track__button--pause`);
        it.classList.add(`track__button--play`);
        audio.pause();
      }
    });
  }

  // Навешиваем обработчик выбора жанра.
  const onClickAnswerCheckbox = () => {
    answerCheckboxChecked = false;
    for (let it of answerCheckbox) {
      if (it.checked) {
        answerCheckboxChecked = true;
        break;
      }
    }

    if (gameSubmit.disabled === true && answerCheckboxChecked === true) {
      gameSubmit.disabled = false;
    } else if (gameSubmit.disabled === false && answerCheckboxChecked === true) {
      gameSubmit.disabled = false;
    } else {
      gameSubmit.disabled = true;
    }
  };

  for (let it of answerCheckbox) {
    it.addEventListener(`change`, onClickAnswerCheckbox);
  }

  // Обработчик события нажатия кнопки отправить
  gameSubmit.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    if (answerCheckbox[0].checked) {
      const mistake = getFragmentFromString({tagName: `div`, classNameElement: `wrong`, screenLine: ``});
      gameMistakes.appendChild(mistake);
      currentGame.lives = currentGame.lives - 1;
    }

    const roundValue = {
      answer: true,
      time: 30
    };
    statistic.push(roundValue);

    nextLevel(currentGame);
  });
};
