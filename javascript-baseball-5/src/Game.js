const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants/messages");
const Validation = require("./Validation");
const Result = require("./Result");

class Game {
  constructor() {
    this.computerNumbers = [];
    this.numbersList = "";
    this.result;
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
      this.result = new Result(this.computerNumbers, this.numbersList);
      this.resultAction();
    });
  }

  resultAction() {
    if (this.result.isSolve) {
      Console.readLine(MESSAGE.SUGGESTION, (suggestion) => {
        this.retryOrQuitGame(suggestion);
      });
    } else {
      this.selectNumbers();
    }
  }

  retryOrQuitGame(suggestion) {
    const answer = parseInt(suggestion);
    Validation.checkCorrectNumber(answer);
    if (answer === 1) {
      return this.start();
    }
    if (answer === 2) {
      Console.close();
    }
  }
}

module.exports = Game;
