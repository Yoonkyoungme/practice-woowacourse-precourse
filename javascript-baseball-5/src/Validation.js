const { Console } = require("@woowacourse/mission-utils");
const { ERROR } = require("./constants/messages");

const Validation = {
  checkNumbers(numbers) {
    this.checkNumbersLength(numbers);
    this.checkNumbersType(numbers);
    this.checkNumbersOverlap(numbers);
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

  checkNumbersOverlap(numbers) {
    const removeOverlap = new Set(numbers);
    try {
      if (removeOverlap.size !== numbers.length) {
        throw new Error(ERROR.OVERLAP);
      }
    } catch (error) {
      Console.print(error.message);
    }
  },

  checkCorrectNumber(selection) {
    try {
      if (selection !== 1 && selection !== 2) {
        throw new Error(ERROR.SELECT);
      }
    } catch (error) {
      Console.print(error.message);
    }
    return selection;
  },
};

module.exports = Validation;
