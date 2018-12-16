import AbstractView from "../abstract-view";
import Router from "../router";


export default class ModalConfirm extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return `
    <section class="modal">
      <button class="modal__close" type="button"><span class="visually-hidden">Закрыть</span></button>
      <h2 class="modal__title">Подтверждение</h2>
      <p class="modal__text">Вы уверены что хотите начать игру заново?</p>
      <div class="modal__buttons">
        <button class="modal__button button">Ок</button>
        <button class="modal__button button">Отмена</button>
      </div>
    </section>
    `.trim();
  }

  bind() {
    this.closeButton = this._element.querySelector(`.modal__close`);
    this.choseButtons = this._element.querySelectorAll(`.modal__button`);
    for (let it of this.choseButtons) {
      it.addEventListener(`click`, (evt) => {
        if (evt.target.textContent === `Ок`) {
          Router.showWelcome();
        } else if (evt.target.textContent === `Отмена`) {
          Router.showGame(this.state);
        }
      });
    }
  }
}
