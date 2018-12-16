import AbstractView from '../abstract-view.js';

export default class ModalError extends AbstractView {
  constructor(error) {
    super();
    this.error = error;
  }

  get template() {
    return `
    <section class="modal">
    <h2 class="modal__title">Произошла ошибка!</h2>
    <p class="modal__text">${this.error.message}</p>
    <p class="modal__text">Пожалуйста, перезагрузите страницу.</p>
  </section>
    `.trim();
  }
}
