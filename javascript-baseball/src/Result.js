const { Console } = require("@woowacourse/mission-utils");
const { VALUE } = require("./constants/values");
const { MESSAGE } = require("./constants/messages");

class Result {
  constructor(computerNumbers, numbersList) {
    this.computerNumbers = computerNumbers;
    this.numbersList = numbersList;
    this.strike = 0;
    this.ball = 0;
    this.getResultCount();
  }

  getResultCount() {
    this.computerNumbers.map((number, index) => {
      if (number == this.numbersList[index]) {
        this.strike++;
      } else if (this.numbersList.includes(number)) {
        this.ball++;
      }
    });
    console.log(`strike: ${this.strike}\nball: ${this.ball}`);
    this.printResult();
  }

  printResult() {
    if (this.strike === 3) {
      Console.print(MESSAGE.WIN);
      return true;
    }
    this.retryGame();
    return false;
  }

  retryGame() {
    if (this.strike === 0 && this.ball === 0) Console.print(VALUE.NOTHING);
    else if (this.ball === 0) Console.print(`${this.strike}${VALUE.STRIKE}`);
    else if (this.strike === 0) Console.print(`${this.ball}${VALUE.BALL}`);
    else {
      Console.print(`${this.strike}${VALUE.STRIKE} ${this.ball}${VALUE.BALL}`);
    }
  }
}

module.exports = Result;
