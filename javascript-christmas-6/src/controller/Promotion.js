import VisitDate from '../domain/models/VisitDate.js';
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
    try {
      return new VisitDate(await InputView.readDate());
    } catch (error) {
      OutputView.print(error.message);
      return this.readVisitDate();
    }
  }

  async readOrder() {
    const input = await InputView.readOrder();
    return input;
  }
}

export default Promotion;
