import {renderElement} from '../util.js';
import {nextLevel} from '../game/game.js';
import {statistic} from '../data/data.js';

const questionsBlock = (roundDescription) => {
  return `<h2 class="game__title">${roundDescription.question}</h2>
  <div class="game__track">
    <button class="track__button track__button--pause" type="button"></button>
    <audio autoplay>
      <source src="${roundDescription.src}" type="audio/mpeg">
    </audio>
  </div>

  <form class="game__artist">
    <div class="artist">
      <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-1" id="answer-1">
      <label class="artist__name" for="answer-1">
        <img class="artist__picture" src="${roundDescription.answers[0].image.url}" alt="${roundDescription.answers[0].title}">
        ${roundDescription.answers[0].title}
      </label>
    </div>

    <div class="artist">
      <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-2" id="answer-2">
      <label class="artist__name" for="answer-2">
        <img class="artist__picture" src="${roundDescription.answers[1].image.url}" alt="${roundDescription.answers[1].title}">
        ${roundDescription.answers[1].title}
      </label>
    </div>

    <div class="artist">
      <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-3" id="answer-3">
      <label class="artist__name" for="answer-3">
        <img class="artist__picture" src="${roundDescription.answers[2].image.url}" alt="${roundDescription.answers[2].title}">
        ${roundDescription.answers[2].title}
      </label>
    </div>
  </form>`;
};


export const renderQuestionBlockForArtist = (round, currentGame) => {
  const questionSection = document.querySelector(`.game__screen`);
  renderElement(questionSection, questionsBlock(round));

  const trackButton = document.querySelector(`.track__button`);
  trackButton.addEventListener(`click`, () => {
    const audio = trackButton.nextElementSibling;
    if (trackButton.classList.contains(`track__button--play`)) {
      trackButton.classList.remove(`track__button--play`);
      trackButton.classList.add(`track__button--pause`);
      audio.play();
    } else {
      trackButton.classList.remove(`track__button--pause`);
      trackButton.classList.add(`track__button--play`);
      audio.pause();
    }
  });

  const answerRadio = document.querySelectorAll(`input[type="radio"]`);
  for (let it of answerRadio) {
    it.addEventListener(`click`, () => {

      // Сохраняем статистику
      const roundValue = {
        answer: true,
        time: 30
      };
      statistic.push(roundValue);

      nextLevel(currentGame);
    });
  }
};
