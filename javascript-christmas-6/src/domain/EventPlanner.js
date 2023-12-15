import { MENU, DRINKS, DESSERTS, MAINS } from '../utils/constants/menus.js';
import { CHRISTMAS, NO_DISCOUNT } from '../utils/constants/discount.js';
import { EVENT_MESSAGES } from '../utils/constants/messages.js';

class EventPlanner {
  #visitDate;

  #order;

  constructor(visitDate, order) {
    this.#visitDate = visitDate.getVisitDate();
    this.#order = order;
  }

  getBeforeDiscount() {
    return this.#order.getOrder().reduce((acc, cur) => {
      const [menu, quantity] = cur;
      return acc + MENU[menu] * quantity;
    }, 0);
  }

  calculateChristmasDiscount() {
    if (this.#visitDate <= CHRISTMAS.EVENT_D_DAY) {
      return (
        CHRISTMAS.BASE_DISCOUNT +
        CHRISTMAS.DISCOUNT_INCREASE * (this.#visitDate - 1)
      );
    }
    return NO_DISCOUNT;
  }

  getBenefitList() {
    const benefitList = new Map();
    const { CHRISTMAS, WEEKDAY, WEEKEND, SPECIAL, FREE_GIFT } = EVENT_MESSAGES;

    benefitList.set(CHRISTMAS, this.calculateChristmasDiscount());
  }
}

export default EventPlanner;
