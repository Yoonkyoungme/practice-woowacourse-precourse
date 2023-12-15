import VisitDate from '../domain/models/VisitDate.js';
import Order from '../domain/models/Order.js';
import EventPlanner from '../domain/EventPlanner.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import { BASE_PRICE } from '../utils/constants/events.js';

class Promotion {
  #visitDate;

  #order;

  #events;

  async start() {
    OutputView.printIntro();
    this.#visitDate = await this.readVisitDate();
    this.#order = await this.readOrder();
    this.#events = new EventPlanner(this.#visitDate, this.#order);
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

  canApplyEvents() {
    return this.#events.getBeforeDiscount() >= BASE_PRICE;
  }

  applyEvents() {
    OutputView.printFreeGift(this.#events.canReceiveFreeGift());
    OutputView.printBenefitList(this.#events.getBenefitList());
    OutputView.printTotalBenefits(this.#events.getTotalBenefits());
  }

  printPlanner() {
    OutputView.printPreView(this.#visitDate.getVisitDate());
    OutputView.printMenu(this.#order.getOrder());
    OutputView.printBeforeDiscount(this.#events.getBeforeDiscount());
    if (this.canApplyEvents) {
      this.applyEvents();
    }
    OutputView.printaAfterDiscount(this.#events.getAfterDiscount());
    OutputView.printEventBadge(this.#events.getEventBadge());
  }
}

export default Promotion;
