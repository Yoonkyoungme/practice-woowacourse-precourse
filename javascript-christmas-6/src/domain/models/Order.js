import { MENU } from '../../utils/constants/menus.js';
import { ERROR_MESSAGES } from '../../utils/constants/messages.js';

class Order {
  #order;

  #orderMenus;

  constructor(inputOrder) {
    this.#order = this.splitInput(inputOrder);
    this.validate();
  }

  splitInput(inputOrder) {
    return inputOrder.split(',').map((order) => {
      const [menu, quantity] = order.split('-');
      return [menu, quantity];
    });
  }

  validate() {
    this.isValidMenu();
    this.isValidQuantity();
    this.isValidFormat();
    this.isUniqueMenu();
  }

  isValidMenu() {
    this.#order.forEach((order) => {
      const [menu] = order;
      if (!MENU[menu]) {
        throw new Error(ERROR_MESSAGES.ORDER);
      }
    });
  }

  isValidQuantity() {
    this.#order.forEach((order) => {
      const [, quantity] = order;
      if (!Number.isInteger(Number(quantity)) || quantity < 1) {
        throw new Error(ERROR_MESSAGES.ORDER);
      }
    });
  }

  isValidFormat() {
    this.#order.forEach((order) => {
      const [menu, quantity] = order;
      if (!menu || !quantity) {
        throw new Error(ERROR_MESSAGES.ORDER);
      }
    });
  }

  isUniqueMenu() {
    this.#orderMenus = this.#order.map((order) => order[0]);
    if (new Set(this.#orderMenus).size !== this.#orderMenus.length) {
      throw new Error(ERROR_MESSAGES.ORDER);
    }
  }

  getOrder() {
    return this.#order;
  }

  getOrderMenus() {
    return this.#orderMenus;
  }
}

export default Order;
