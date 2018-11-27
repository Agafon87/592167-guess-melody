let sectionMain = document.querySelector(`section.main`);


const getFragmentFromString = (descriptionScreen) => {
  const fragment = document.createDocumentFragment();
  let element = document.createElement(descriptionScreen.tagName);
  let classNameArray = descriptionScreen.classNameElement.split(` `);
  classNameArray.forEach((it) => {
    element.classList.add(it);
  });
  element.innerHTML = descriptionScreen.screenLine;
  fragment.appendChild(element);

  return fragment;
};


const renderScreen = (element) => {
  sectionMain.innerHTML = ``;
  sectionMain.appendChild(element);
};


const getRandomNumber = () => {
  return Math.round(Math.random() * 2);
};


export {getFragmentFromString, renderScreen, getRandomNumber};
