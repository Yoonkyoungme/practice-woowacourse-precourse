import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Promotion {
  #visitDate;

  #order;

  async start() {
    this.#visitDate = await this.readVisitDate();
    this.#order = await this.readOrder();
  }

  async readVisitDate() {
    const input = await InputView.readDate();
    return input;
  }

  async readOrder() {
    const input = await InputView.readOrder();
    return input;
  }
}

export default Promotion;
