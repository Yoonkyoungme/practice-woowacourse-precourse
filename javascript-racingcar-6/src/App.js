import CarRace from './CarRace.js';

class App {
  #carRace;

  constructor() {
    this.#carRace = new CarRace();
  }

  async play() {
    await this.#carRace.start();
  }
}

export default App;
