import { MENU, DRINKS, DESSERTS, MAINS } from '../utils/constants/menus.js';

class EventPlanner {
  #visitDate;

  #order;

  constructor(visitDate, order) {
    this.#visitDate = visitDate;
    this.#order = order;
  }

  getBeforeDiscount() {
    return this.#order.getOrder().reduce((acc, cur) => {
      const [menu, quantity] = cur;
      return acc + MENU[menu] * quantity;
    }, 0);
  }
}

export default EventPlanner;
