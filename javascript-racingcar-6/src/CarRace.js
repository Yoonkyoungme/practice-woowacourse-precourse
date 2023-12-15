import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class CarRace {
  #carNames;

  async start() {
    this.#carNames = await this.readCarNames();
  }

  async readCarNames() {
    const input = await InputView.readCarNames();
    return input;
  }
}

export default CarRace;
