import { ERROR_MESSAGES } from '../../utils/constants/messages.js';

class VisitDate {
  #visitDate;

  constructor(inputDate) {
    this.#visitDate = inputDate;
    this.validate();
  }

  validate() {
    this.isNumber();
    this.isInRange();
  }

  isNumber() {
    if (!Number.isInteger(Number(this.#visitDate))) {
      throw new Error(ERROR_MESSAGES.DATE);
    }
  }

  isInRange() {
    if (this.#visitDate < 1 || this.#visitDate > 31) {
      throw new Error(ERROR_MESSAGES.DATE);
    }
  }

  getVisitDate() {
    return Number(this.#visitDate);
  }
}

export default VisitDate;
