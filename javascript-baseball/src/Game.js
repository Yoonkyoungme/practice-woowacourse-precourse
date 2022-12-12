const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants/messages");
const Validation = require("./Validation");
const Result = require("./Result");

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
    console.log(this.computerNumbers);
    Console.readLine(MESSAGE.INPUT, (numbers) => {
      Validation.checkNumbers(numbers);
      this.numbersList = numbers;
      const result = new Result(this.computerNumbers, this.numbersList);
    });
  }
}

module.exports = Game;
