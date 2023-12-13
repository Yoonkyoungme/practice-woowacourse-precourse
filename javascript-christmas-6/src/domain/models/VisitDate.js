import { ERROR_MESSAGES } from '../../utils/constants/messages.js';

class VisitDate {
  constructor(inputDate) {
    this.date = this.validate(inputDate);
  }

  validate(inputDate) {
    this.isNumber(inputDate);
    this.isInRange(inputDate);
  }

  isNumber(inputDate) {
    if (!Number.isInteger(Number(inputDate))) {
      throw new Error(ERROR_MESSAGES.DATE);
    }
  }

  isInRange(inputDate) {
    if (inputDate < 1 || inputDate > 31) {
      throw new Error(ERROR_MESSAGES.DATE);
    }
  }

  getVisitDate() {
    return this.getVisitDate;
  }
}

export default VisitDate;
