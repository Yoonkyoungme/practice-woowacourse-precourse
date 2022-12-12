const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants/messages");
const Validation = require("./Validation");

class Game {
  constructor() {
    this.computerNumbers = [];
    this.numbersList = "";
    this.start();
  }
  start() {
    this.selectComputerNumbers();
    this.selectNumbers();
  }

  selectComputerNumbers() {
    while (this.computerNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.computerNumbers.includes(number)) {
        this.computerNumbers.push(number);
      }
    }
  }

  selectNumbers() {
    Console.readLine(MESSAGE.INPUT, (numbers) => {
      Validation.checkNumbers(numbers);
    });
  }
}

module.exports = Game;
