const { Console } = require("@woowacourse/mission-utils");
const { ERROR } = require("./constants/messages");

const Validation = {
  checkNumbers(numbers) {
    this.checkNumbersLength(numbers);
    this.checkNumbersType(numbers);
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

  checkNumbersType(numbers) {
    try {
      if (isNaN(numbers)) {
        throw new Error(ERROR.TYPE);
      }
    } catch (error) {
      Console.print(error.message);
    }
  },
};

module.exports = Validation;
