export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractView, only concrete one`);
    }
  }

  get template() {
    throw new Error(`You have to define screen template for view`);
  }

  render() {
    const parser = new DOMParser();
    const result = parser.parseFromString(this.template, `text/html`);

    return result.body.firstElementChild;
  }

  bind() {}

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }
    return this._element;
  }
}
