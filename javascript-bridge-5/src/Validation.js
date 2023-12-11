const { Console } = require("@woowacourse/mission-utils");
const { ERROR } = require("./constants/messages");

const Validation = {
  checkInputSize(inputSize) {
    const size = parseInt(inputSize);
    try {
      if (!(size >= 3 && size <= 20)) {
        throw new Error(ERROR.SIZE);
      }
    } catch (error) {
      Console.print(error.message);
      return false;
    }
    return size;
  },

  checkInputMoving(moving) {
    try {
      if (moving !== "D" && moving !== "U") {
        throw new Error(ERROR.MOVING);
      }
    } catch (error) {
      Console.print(error.message);
      return false;
    }
    return moving;
  },

  checkInputCommand(command) {
    try {
      if (command !== "R" && command !== "Q") {
        throw new Error(ERROR.COMMAND);
      }
    } catch (error) {
      Console.print(error.message);
      return false;
    }
    return command;
  },
};

module.exports = Validation;
