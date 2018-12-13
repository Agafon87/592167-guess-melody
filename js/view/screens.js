// удалить файл в релизе

const Screens = {
  // this in comment
  'modalConfirm': {tagName: `section`, classNameElement: `modal`, screenLine: `<button class="modal__close" type="button"><span class="visually-hidden">Закрыть</span></button>
  <h2 class="modal__title">Подтверждение</h2>
  <p class="modal__text">Вы уверены что хотите начать игру заново?</p>
  <div class="modal__buttons">
    <button class="modal__button button">Ок</button>
    <button class="modal__button button">Отмена</button>
  </div>`},


  // this in comment
  'modalError': {tagName: `section`, classNameElement: `modal`, screenLine: `<h2 class="modal__title">Произошла ошибка!</h2>
  <p class="modal__text">Статус: 404. Пожалуйста, перезагрузите страницу.</p>`}
};

export {Screens};
