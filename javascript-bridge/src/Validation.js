const { Console } = require("@woowacourse/mission-utils");
const { ERROR } = require("./constants/messages");

const Validation = {
  checkInputNumber(inputSize) {
    const size = parseInt(inputSize);
    try {
      if (!(size >= 3 && size <= 20)) {
        throw new Error(ERROR.SIZE);
      }
    } catch (error) {
      Console.print(error.message);
    }
  },

  checkNumbersLength(numbers) {
    try {
      if (numbers.length !== 3) {
        throw new Error(ERROR.LENGTH);
      }
    } catch (error) {
      Console.print(error.message);
    }
  },
};

module.exports = Validation;
