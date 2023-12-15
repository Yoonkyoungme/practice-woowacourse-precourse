import { ERROR_MESSAGES } from '../../utils/constants/messages.js';

class CarNames {
  #carNames;

  constructor(inputCarNames) {
    this.#carNames = this.splitInput(inputCarNames);
    this.validate();
  }

  splitInput(inputCarNames) {
    return inputCarNames.split(',');
  }

  validate() {
    this.isValidLength();
  }

  isValidLength() {
    if (this.#carNames.some((carName) => carName.length > 5)) {
      throw new Error(ERROR_MESSAGES.INVALID_CAR_NAME);
    }
  }

  getCarNames() {
    return this.#carNames;
  }
}

export default CarNames;
