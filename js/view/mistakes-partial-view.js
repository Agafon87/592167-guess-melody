const mistake = `<div class="wrong"></div>`;

export default (mistakes) => {
  return new Array(mistakes).fill(mistake).join(``);
};
