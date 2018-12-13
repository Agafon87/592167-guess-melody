const TIME_FOR_LOADING = 20000;

class AudioPreloader {
  constructor() {
    this._preloadedAudios = {};
  }

  getAudioFromSrc(src) {
    return this._preloadedAudios[src];
  }

  preloadAudios(urls) {
    return Promise.all(urls.map((src) => {
      return this._preloadAudio(src);
    }));
  }

  _preloadAudio(src) {
    return new Promise((resolve, reject) => {
      const audio = new Audio();
      this._preloadedAudios[src] = audio;

      const timerId = setTimeout(() => {
        reject(new Error(`Не удалось загрузить некоторые песни :(`));
      }, TIME_FOR_LOADING);

      audio.addEventListener(`canplaythrough`, () => {
        clearTimeout(timerId);
        resolve();
      }, false);

      audio.setAttribute(`src`, src);
      audio.load();
    });
  }
}

export default new AudioPreloader();
