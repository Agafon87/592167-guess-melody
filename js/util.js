let sectionMain = document.querySelector(`section.main`);


const getFragmentFromString = (line, tagName, classNameElement) => {
  const fragment = document.createDocumentFragment();
  let element = document.createElement(tagName);
  let classNameArray = classNameElement.split(` `);
  classNameArray.forEach((it) => {
    element.classList.add(it);
  });
  element.innerHTML = line;
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
