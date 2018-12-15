export default (questions) => {
  const urls = new Set();
  questions.forEach(({type, answers, src}) => {
    if (type === `genre`) {
      answers.forEach((answer) => {
        urls.add(answer.src);
      });
    } else {
      urls.add(src);
    }
  });
  return [...urls];
};
