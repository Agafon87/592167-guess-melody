import {getFragmentFromString} from './util.js';

const tagName = `section`;
const classNameElement = `modal`;
const welcomeScreen = `<button class="modal__close" type="button"><span class="visually-hidden">Закрыть</span></button>
<h2 class="modal__title">Подтверждение</h2>
<p class="modal__text">Вы уверены что хотите начать игру заново?</p>
<div class="modal__buttons">
  <button class="modal__button button">Ок</button>
  <button class="modal__button button">Отмена</button>
</div>`;

const fragment = getFragmentFromString(welcomeScreen, tagName, classNameElement);

export {fragment};
