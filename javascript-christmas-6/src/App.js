import Promotion from './controller/Promotion.js';

class App {
  #controller;

  constructor() {
    this.#controller = new Promotion();
  }

  async run() {
    await this.#controller.start();
  }
}

export default App;
