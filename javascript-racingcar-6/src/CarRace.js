import CarNames from './domain/models/CarNames.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class CarRace {
  #carNames;

  #raceTimes;

  async start() {
    this.#carNames = await this.readCarNames();
    this.#raceTimes = await this.readRaceTimes();
  }

  async readCarNames() {
    try {
      return new CarNames(await InputView.readCarNames());
    } catch (error) {
      OutputView.print(error.message);
    }
  }

  async readRaceTimes() {
    const input = await InputView.readRaceTimes();
    return input;
  }
}

export default CarRace;
