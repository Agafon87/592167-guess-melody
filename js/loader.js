import Router from "./router";

const URL = `https://es.dump.academy/guess-melody/`;
const QUESTIONS_COMPLETION = `questions`;
const STATS_COMPLETION = `stats/592167`;

const toJSON = (response) => response.json();

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

export default class Loader {
  static loadData() {
    return fetch(`${URL}${QUESTIONS_COMPLETION}`).
      then(checkStatus).
      then((response) => response.json()).
      then((data) => Router.init(data)).
      catch(Router.showModalError);
  }

  static loadResults() {
    return fetch(`${URL}${STATS_COMPLETION}`).
      then(checkStatus).
      then(toJSON);
  }

  static saveResults(data) {
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(`${URL}${STATS_COMPLETION}`, requestSettings).
      then(checkStatus);
  }
}
