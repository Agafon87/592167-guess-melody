import AbstractView from "../abstract-view";
class CapView extends AbstractView {
  get template() {
    return `
    <section class="welcome">
    <div class="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="welcome__rules-title">Ожидайте.</h2>
    <p class="welcome__text">Идет загрузка данных.</p>
  </section>
    `.trim();
  }
}

export default new CapView();
