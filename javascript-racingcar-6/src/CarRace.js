import CarNames from './domain/models/CarNames.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class CarRace {
  #carNames;

  async start() {
    this.#carNames = await this.readCarNames();
  }

  async readCarNames() {
    try {
      return new CarNames(await InputView.readCarNames());
    } catch (error) {
      OutputView.print(error.message);
    }
  }
}

export default CarRace;
