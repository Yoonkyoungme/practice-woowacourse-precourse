import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Promotion {
  #visitDate;

  async start() {
    this.#visitDate = await this.readVisitDate();
  }

  async readVisitDate() {
    const input = await InputView.readDate();
    return input;
  }
}

export default Promotion;
