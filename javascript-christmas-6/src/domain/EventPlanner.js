import { MENU, DRINKS, DESSERTS, MAINS } from '../utils/constants/menus.js';
import {
  CHRISTMAS,
  DAY_OF_WEEK,
  SPECIAL,
  NO_DISCOUNT,
} from '../utils/constants/discount.js';
import { EVENT_MESSAGES } from '../utils/constants/messages.js';
import findDayOfWeek from '../utils/common/findDayOfWeek.js';

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
    const { EVENT_D_DAY, BASE_DISCOUNT, DISCOUNT_INCREASE } = CHRISTMAS;

    if (this.#visitDate <= EVENT_D_DAY) {
      return BASE_DISCOUNT + DISCOUNT_INCREASE * (this.#visitDate - 1);
    }
    return NO_DISCOUNT;
  }

  calculateWeekdayDiscount() {
    return this.#order.getOrder().reduce((acc, [menu, quantity]) => {
      if (DESSERTS.includes(menu)) {
        return acc + quantity * DAY_OF_WEEK;
      }
      return acc;
    }, 0);
  }

  calculateWeekend() {
    return this.#order.getOrder().reduce((acc, [menu, quantity]) => {
      if (MAINS.includes(menu)) {
        return acc + quantity * DAY_OF_WEEK;
      }
      return acc;
    }, 0);
  }

  calculateSpecialDiscount(dayOfWeek) {
    if (dayOfWeek === 0 || this.#visitDate === CHRISTMAS.EVENT_D_DAY) {
      return SPECIAL;
    }
    return NO_DISCOUNT;
  }

  getBenefitList() {
    const benefitList = new Map();
    const { CHRISTMAS, WEEKDAY, WEEKEND, SPECIAL, FREE_GIFT } = EVENT_MESSAGES;
    const dayOfWeek = findDayOfWeek(this.#visitDate);

    benefitList.set(CHRISTMAS, this.calculateChristmasDiscount());
    if (dayOfWeek >= 0 && dayOfWeek <= 4) {
      benefitList.set(WEEKDAY, this.calculateWeekdayDiscount());
    } else {
      benefitList.set(WEEKEND, this.calculateWeekend());
    }
    benefitList.set(SPECIAL, this.calculateSpecialDiscount(dayOfWeek));

    return benefitList;
  }
}

export default EventPlanner;
