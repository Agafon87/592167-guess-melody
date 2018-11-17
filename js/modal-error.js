import {getFragmentFromString} from './util.js';

const tagName = `section`;
const classNameElement = `modal`;
const welcomeScreen = `<h2 class="modal__title">Произошла ошибка!</h2>
<p class="modal__text">Статус: 404. Пожалуйста, перезагрузите страницу.</p>`;

const fragment = getFragmentFromString(welcomeScreen, tagName, classNameElement);

export {fragment};
