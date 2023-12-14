import VisitDate from '../domain/models/VisitDate.js';
import Order from '../domain/models/Order.js';
import EventPlanner from '../domain/EventPlanner.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Promotion {
  #visitDate;

  #order;

  async start() {
    OutputView.printIntro();
    this.#visitDate = await this.readVisitDate();
    this.#order = await this.readOrder();
    this.printPlanner();
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
    try {
      return new Order(await InputView.readOrder());
    } catch (error) {
      OutputView.print(error.message);
      return this.readOrder();
    }
  }

  printPlanner() {
    OutputView.printPreView(this.#visitDate.getVisitDate());
    OutputView.printMenu(this.#order.getOrder());
  }
}

export default Promotion;
