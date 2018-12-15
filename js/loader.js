const URL = `https://es.dump.academy/guess-melody/questions`;

export default class Loader {
  static loadData() {
    const data = fetch(URL);
    return data.then((response) => response.json());
  }
}
