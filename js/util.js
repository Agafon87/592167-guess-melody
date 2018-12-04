let sectionMain = document.querySelector(`section.main`);


export const getFragmentFromString = (descriptionScreen) => {
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


export const renderScreen = (element) => {
  sectionMain.innerHTML = ``;
  sectionMain.appendChild(element);
};

export const renderElement = (element, questionBlock) => {
  element.innerHTML = ``;
  element.innerHTML = questionBlock;
};


export const getRandomNumber = () => {
  return Math.round(Math.random() * 2);
};
