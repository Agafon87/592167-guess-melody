'use strict';

let sectionMain = document.querySelector(`section.main`);
let mainApp = document.querySelector(`.app`);
const screens = Array.from(document.querySelectorAll(`template`)).map((it) => it.content);


let fragment = document.createDocumentFragment();
const arrowBlock = document.createElement(`div`);
arrowBlock.classList.add(`arrows__wrap`);
arrowBlock.innerHTML = `<style>
.arrows__wrap {
  position: absolute;
  top: 135px;
  left: 50%;
  margin-left: -56px;
}
.arrows__btn {
  background-color: blue;
  border: 2px solid black;
  padding: 5px 20px;
}
</style>
<button class="arrows__btn"><-</button>
<button class="arrows__btn">-></button>`;
fragment.appendChild(arrowBlock);


const getScreen = (screen) => {
  sectionMain.innerHTML = ``;
  sectionMain.appendChild(screen.cloneNode(true));
};

let current = 0;
const leafScreens = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  current = index;
  getScreen(screens[current]);
};


document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case 37:
      leafScreens(current + 1);
      break;
    case 39:
      leafScreens(current - 1);
      break;
  }
});

const switchScreensUsingArrowButtons = (it) => {
  switch (it) {
    case 0:
      leafScreens(current - 1);
      break;
    case 1:
      leafScreens(current + 1);
      break;
  }
};

getScreen(screens[0]);
mainApp.appendChild(fragment);
const arrowButtons = document.querySelectorAll(`.arrows__btn`);


for (let i = 0; i < arrowButtons.length; i++) {
  const button = arrowButtons[i];
  button.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    switchScreensUsingArrowButtons(i);
  });
}
