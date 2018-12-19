const sectionMain = document.querySelector(`section.main`);

const changeScreenView = (view) => {
  sectionMain.innerHTML = ``;
  sectionMain.appendChild(view.element);
};

export default changeScreenView;
