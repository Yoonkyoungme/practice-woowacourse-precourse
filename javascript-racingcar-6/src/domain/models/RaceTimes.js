import { ERROR_MESSAGES } from '../../utils/constants/messages.js';

class RaceTimes {
  #raceTimes;

  constructor(inputRaceTimes) {
    this.#raceTimes = inputRaceTimes;
    this.validate();
  }

  validate() {
    this.isNumber();
  }

  isNumber() {
    const raceTimes = Number(this.#raceTimes);

    if (!Number.isInteger(raceTimes) || raceTimes <= 0) {
      throw new Error(ERROR_MESSAGES.INVALID_RACE_TIMES);
    }
  }

  getRaceTimes() {
    return Number(this.#raceTimes);
  }
}

export default RaceTimes;
